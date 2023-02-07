import Image from "next/image";
import { useEffect, useRef } from "react";

import noronha from "../../public/images/IMG_4382.png";

export function Pictures({ onLoad }: { onLoad: (e: string) => void }) {
  const imageRef = useRef<HTMLImageElement | null | any>();

  const handleMouseMove = (e: any, image: any) => {
    image.style.scale = 1.1;
    const { left, top, width, height } = image.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    image.style.transform = `translate(${30 * x}px, ${30 * y}px)`;
  };

  const handleMouseLeave = (image: any) => {
    image.style.transform = "translate(0px, 0px)";
    image.style.scale = 1;
  };

  return (
    <div
      onMouseMove={(e) => handleMouseMove(e, imageRef.current)}
      onMouseLeave={() => handleMouseLeave(imageRef.current)}
      className="relative flex w-[366px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black text-white cursor-crosshair"
    >
      <Image
        ref={imageRef}
        onLoad={() => onLoad("pictures")}
        priority
        src={noronha}
        alt="contributions"
        className="object-fit relative rounded-2xl duration-300 ease-linear"
      />
      <p className="absolute left-6 bottom-6 text-sm font-medium">
        Fernando de Noronha
      </p>
    </div>
  );
}
