import { useState } from "react";

import Image from "next/image";

import send from "../../public/images/send.svg";
import { AnimatePresence, motion } from "framer-motion";

export function Mailer() {
  const [success, setSuccess] = useState(false);
  const [information, setInformation] = useState({
    message: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!information.message || !information.email) return;

    const res = await fetch("/api/mailto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(information),
    });

    if (res.status === 200) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 10000);
    }
  };

  return (
    <>
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
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ bottom: "-24px", opacity: 0 }}
            animate={{ bottom: "24px", opacity: 1 }}
            exit={{ bottom: "-24px", opacity: 0 }}
            className="fixed bottom-6 right-0 left-0 mx-auto w-72 px-6 py-3 bg-black border border-white/10 rounded-xl text-zinc-300 shadow-lg"
          >
            <p className="text-sm text-white font-medium mb-1">{`Thank you for reaching out!`}</p>
            <p className="text-sm ">{`I'll make sure to take a look at your message asap!`}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
