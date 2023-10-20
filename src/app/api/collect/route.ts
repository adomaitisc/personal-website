import { cookies, headers } from "next/headers";
import { TIME } from "./config";
import jwt from "jsonwebtoken";
import { conn } from "@/app/db";
import type { Session } from "@/app/db";

export async function GET() {
  console.log("endpoint hit");
  // get token from cookies
  const cookieStore = cookies();

  let sessionToken = cookieStore.get("session-token")?.value;

  // try to verify the token

  try {
    const decoded = jwt.verify(sessionToken!, process.env.JWT_KEY!);

    console.log("token is valid");
  } catch (e) {
    // set new cookies based on the ip address from x-forwarded-for header
    const headersList = headers();
    const ipAddress = headersList.get("x-forwarded-for");

    // token expires in 1 hour (3600 seconds [60 * 60])
    sessionToken = jwt.sign(
      { ip: ipAddress, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
      process.env.JWT_KEY!
    );

    cookies().set("session-token", sessionToken);
    console.log("new token generated");
  }

  // update db with the token
  const query = await conn.execute("SELECT * FROM Session WHERE token = ?", [
    sessionToken,
  ]);
  const result = query.rows[0] as Session;

  if (!result || result === undefined || result === null) {
    // create new session
    await conn.execute(
      "INSERT INTO Session (token, time_spent) VALUES (?, ?)",
      [sessionToken, TIME]
    );
  } else {
    // update session
    await conn.execute("UPDATE Session SET time_spent = ? WHERE token = ?", [
      TIME + result.time_spent,
      sessionToken,
    ]);
  }

  return new Response(JSON.stringify({ success: true }), { status: 204 });
}
