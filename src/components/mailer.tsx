import { useState } from "react";

import Image from "next/image";

import send from "../../public/images/send.svg";

export function Mailer() {
  const [information, setInformation] = useState({
    message: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInformation({ message: "", email: "" });
    // send email

    console.log(information);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex w-[366px] flex-col gap-[12px] rounded-2xl border border-white/10 bg-black p-3 text-white"
    >
      <textarea
        name="message"
        onChange={(e) => handleChange(e)}
        value={information.message}
        className="h-[96px] w-full resize-none rounded-lg bg-zinc-900 p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40"
        placeholder="Send me a message"
      />
      <div className="relative w-full">
        <input
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="Your email"
          value={information.email}
          className="w-full rounded-lg bg-zinc-900 p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40"
        />
        <button
          type="submit"
          className="absolute right-2 bottom-0 top-0 flex items-center justify-center"
        >
          <Image
            priority
            src={send as string}
            alt="send message"
            className="my-auto w-8 rounded-md bg-zinc-700 px-2 py-1 opacity-40 duration-200 hover:scale-105 hover:opacity-60"
          />
        </button>
      </div>
    </form>
  );
}
