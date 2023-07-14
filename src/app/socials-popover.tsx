"use client";
import * as Popover from "@radix-ui/react-popover";
import { Expand, Github, Linkedin, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function SocialPopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ height: 54, width: 114 }}
      animate={{ height: isOpen ? 158 : 54, width: isOpen ? 200 : 114 }}
      transition={{ duration: 0.1 }}
      className=" hover:border-white/30 duration-200 bg-zinc-600/30 backdrop-blur-3xl border border-white/20 rounded-[27px] overflow-hidden p-1"
    >
      <div className="flex gap-4 justify-between">
        <div className="aspect-square h-[44px] rounded-full overflow-hidden relative">
          <Image alt="me" fill src="/media/caua.jpeg" />
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="group aspect-square p-3 cursor-pointer h-[44px] duration-200 rounded-full overflow-hidden hover:bg-zinc-500/60 relative bg-zinc-600 grid place-items-center"
        >
          <div className="relative w-full h-full group-hover:scale-110 duration-200">
            <motion.div
              animate={isOpen ? { top: 6, left: 2.5 } : { top: 3.5, left: 0 }}
              className="absolute bg-white h-0.5 rotate-45 w-[9px] top-[3.5px] left-0 rounded-full"
            />
            <motion.div
              animate={
                isOpen ? { bottom: 6, right: 2.5 } : { bottom: 3.5, right: 0 }
              }
              className="absolute bg-white h-0.5 rotate-45 w-[9px] bottom-[3.5px] right-0 rounded-full"
            />
            <motion.div
              animate={isOpen ? { top: 6, right: 2.5 } : { top: 3.5, right: 0 }}
              className="absolute bg-white h-0.5 -rotate-45 w-[9px] top-[3.5px] right-0 rounded-full"
            />
            <motion.div
              animate={
                isOpen ? { bottom: 6, left: 2.5 } : { bottom: 3.5, left: 0 }
              }
              className="absolute bg-white h-0.5 -rotate-45 w-[9px] bottom-[3.5px] left-0 rounded-full"
            />

            <AnimatePresence>
              {isOpen ? null : (
                <>
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 7 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute bg-white h-0.5 w-[7px] top-0 left-0 rounded-full"
                  />
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 7 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute bg-white h-0.5 w-[7px] top-0 right-0 rounded-full"
                  />
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 7 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute bg-white h-[7px] w-0.5 top-0 left-0 rounded-full"
                  />
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 7 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute bg-white h-[7px] w-0.5 top-0 right-0 rounded-full"
                  />
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 7 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute bg-white h-0.5 w-[7px] bottom-0 left-0 rounded-full"
                  />
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 7 }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute bg-white h-0.5 w-[7px] bottom-0 right-0 rounded-full"
                  />
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 7 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute bg-white h-[7px] w-0.5 bottom-0 left-0 rounded-full"
                  />
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 7 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute bg-white h-[7px] w-0.5 bottom-0 right-0 rounded-full"
                  />
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className=" mt-2 w-full h-full flex flex-col gap-2">
        <div className="w-full bg-gray-600/60 rounded-full px-4 py-2 text-lg cursor-pointer hover:bg-gray-500/60 duration-200">
          <p className="flex gap-2 items-center">
            <Github size={18} />
            Github
          </p>
        </div>
        <div className="w-full bg-gray-600/60 rounded-full px-4 py-2 text-lg cursor-pointer hover:bg-gray-500/60 duration-200">
          <p className="flex gap-2 items-center">
            <Linkedin size={18} />
            Linkedin
          </p>
        </div>
      </div>
    </motion.div>
  );
}
