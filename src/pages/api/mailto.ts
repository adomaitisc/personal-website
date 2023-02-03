import { NextApiRequest, NextApiResponse } from "next";

export default function mailto(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  res.status(200).json({
    success: true,
    message:
      "Thank you for sending me a message. I'll be happy to write you a reply.",
  });
}
