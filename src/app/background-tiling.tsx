"use client";

import { animate, motion, stagger } from "framer-motion";
import { useEffect, useRef } from "react";

export function BackgroundTiling() {
  const tileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // framer motion stagger function
    animate(
      "li",
      { opacity: [1, 0.8, 0.6, 1] },
      { delay: stagger(0.5), repeat: Infinity, duration: 6 }
    );
  }, []);

  return (
    <motion.div
      ref={tileRef}
      animate={{ opacity: 1 }}
      className="grid fixed w-full list-none z-10 pointer-events-none h-screen grid-cols-4 grid-rows-3 gap-[2px] p-8"
    >
      <li className="row-span-2 col-span-3 bg-neutral-800 rounded-md backdrop-blur-sm backdrop-brightness-75 rounded-tl-3xl" />
      <li className="row-span-2 bg-neutral-800 rounded-md backdrop-blur-sm backdrop-brightness-75 rounded-tr-3xl" />
      <li className="col-span-3 bg-neutral-800 rounded-md backdrop-blur-sm backdrop-brightness-75 rounded-bl-3xl" />
      <li className=" bg-neutral-800 rounded-md backdrop-blur-sm backdrop-brightness- rounded-br-3xl" />
    </motion.div>
  );
}
