"use client";

import { TIME } from "./api/collect/config";
import { useEffect } from "react";

export function Collect() {
  useEffect(() => {
    const collect = setInterval(async () => {
      if (document.visibilityState !== "visible") {
        return;
      }

      await fetch("/api/collect", {
        method: "GET",
      });
    }, TIME);

    return () => clearInterval(collect);
  }, []);

  return null;
}
