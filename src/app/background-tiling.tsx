"use client";

import { useEffect, useRef } from "react";

export function BackgroundTiling() {
  const tileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // add staggered animation to the tiles
    const tiles = tileRef.current?.children;
    setTimeout(() => {
      if (tiles) {
        for (let i = 0; i < tiles.length; i++) {
          const tile = tiles[i] as HTMLElement;

          // get a random duration between 7 and 10 seconds
          const duration = Math.random() * 3 + 7;
          tile.style.opacity = "0.3";

          // randomly add tile or tile-2 class
          if (Math.random() > 0.5) tile.classList.add("tile-2");
          else tile.classList.add("tile");
          tile.style.backgroundImage = "url(/media/noise.svg)";
          tile.style.animationDuration = `${duration}s`;
          tile.style.animationDelay = `-${duration}s`;
          tile.style.animationIterationCount = "infinite";

          tile.style.opacity = "1";
        }
      }
    }, 1000);
  }, []);

  return (
    <div
      ref={tileRef}
      className="grid fixed w-full z-10 pointer-events-none h-screen grid-cols-4 grid-rows-3 gap-[2px] p-8"
    >
      <div className="row-span-2 col-span-3 bg-neutral-800 rounded-md backdrop-blur-sm backdrop-brightness-75 rounded-tl-3xl" />
      <div className="row-span-2 bg-neutral-800 rounded-md backdrop-blur-sm backdrop-brightness-75 rounded-tr-3xl" />
      <div className="col-span-3 bg-neutral-800 rounded-md backdrop-blur-sm backdrop-brightness-75 rounded-bl-3xl" />
      <div className=" bg-neutral-800 rounded-md backdrop-blur-sm backdrop-brightness- rounded-br-3xl" />
    </div>
  );
}
