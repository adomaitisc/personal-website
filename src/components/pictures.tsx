import Image from "next/image";

import noronha from "../../public/images/IMG_4382.png";

export function Pictures({ onLoad }: { onLoad: (e: string) => void }) {
  return (
    <div className="group relative flex w-[366px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black text-white">
      <Image
        onLoad={() => onLoad("pictures")}
        priority
        src={noronha}
        alt="contributions"
        className="object-fit rounded-2xl duration-300 group-hover:scale-110"
      />
      <p className="absolute left-6 bottom-6 text-sm font-medium">
        Fernando de Noronha
      </p>
    </div>
  );
}
