"use client";

import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

export function ScrollThing() {
  const overscrollOptions = {
    enable: true,
    effect: "bounce",
    damping: 0.15,
    maxOverscroll: 150,
    glowColor: "#fff",
  };
  const options = {
    damping: 0.07,
    plugins: {
      overscroll: overscrollOptions,
    },
  };

  useEffect(() => {
    // @ts-ignore
    Scrollbar.init(document.getElementById("scroll"), options);

    return () => {
      // @ts-ignore
      if (Scrollbar) Scrollbar.destroy(document.getElementById("scroll"));
    };
  }, []);
  return null;
}
