"use client";

import React, { ReactElement, useEffect, useRef, useState } from "react";

const chars = "abcdefghijklmnopqrstuvwxyz";

function randomizeText(iterations: number, text: string) {
  const size = text.length;
  return text
    .split("")
    .map((char, index) => {
      if (index <= iterations / 10) return char;
      if (char.match(/[^a-zA-Z]/)) return char;

      return chars[Math.floor(Math.random() * 26)];
    })
    .join("");
}

export function TextReveal({ children }: { children: React.ReactNode }) {
  const [reveal, setReveal] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const text = children as string;

  useEffect(() => {
    let iterations = 0;
    const interval: any = setInterval(() => {
      if (iterations >= text.length * 10) {
        setIsFinished(true);
        return clearInterval(interval);
      }

      setReveal(randomizeText(iterations, text));
      iterations++;
    }, 20);
  }, []);

  return (
    <span
      aria-expanded={isFinished}
      className=" aria-expanded:animate-[shine_1000ms] ease-in-out"
    >
      {reveal}
    </span>
  );
}
