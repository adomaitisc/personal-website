"use client";
import * as Popover from "@radix-ui/react-popover";
import { Expand } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: { innerWidth: "100%" },
  closed: { innerWidth: "44px" },
};

export function SocialPopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      animate={{
        height: isOpen ? 500 : "auto",
        width: isOpen ? 500 : "auto",
      }}
      onClick={() => setIsOpen(!isOpen)}
      className="group hover:text-white hover:border-white/30 duration-200 bg-zinc-600/30 backdrop-blur-3xl border border-white/20 rounded-3xl flex p-1 gap-4"
    >
      <div className="aspect-square cursor-pointer h-[44px] rounded-full overflow-hidden relative">
        <Image alt="me" fill src="/media/caua.jpeg" />
      </div>
      <div className="aspect-square cursor-pointer h-[44px] rounded-full overflow-hidden relative bg-zinc-600 grid place-items-center">
        <Expand className="group-hover:scale-110 duration-200" />
      </div>
      {isOpen && <div className="bg-red-500 w-72 h-72" />}
    </motion.div>
  );
}
