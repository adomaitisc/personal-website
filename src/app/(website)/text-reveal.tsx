"use client";

import React, { ReactElement, useEffect, useRef, useState } from "react";

const chars = "abcdefghijklmnopqrstuvwxyz123456789";

function getStringByIndex(
  currentIndex: number,
  startReveal: number,
  text: string
) {
  return text
    .split("")
    .map((char, index) => {
      if (char.match(/[^a-zA-Z]/)) return char;
      if (index + startReveal <= currentIndex) return char;
      return chars[Math.floor(Math.random() * chars.length)];
    })
    .join("")
    .substring(0, currentIndex);
}

export function TextReveal({ children }: { children: React.ReactNode }) {
  const [reveal, setReveal] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const text = children as string;

  useEffect(() => {
    // start by revealing the randomizedText index by index
    let iterations = 0;
    let index = 0;
    let startReveal = text.length * 0.5;
    let endReveal = text.length * 1.5;

    const interval: any = setInterval(() => {
      if (index > endReveal) {
        clearInterval(interval);
        setIsFinished(true);
      }

      setReveal(getStringByIndex(index, startReveal, text));
      // make iterations update once every 3 iterations
      if (iterations % 2 === 0) {
        index++;
      }
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
