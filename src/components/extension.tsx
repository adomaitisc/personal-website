import Image from "next/image";
import Link from "next/link";

import ext from "../../public/images/inspect-gpt-logo.svg";

export function Extension({ onLoad }: { onLoad: (e: string) => void }) {
  return (
    <Link
      href="https://inspectgpt.com/"
      rel="noreferrer"
      target="_blank"
      className="flex w-[366px] items-center hover:bg-white/10 duration-150 justify-between gap-2 rounded-2xl border border-white/10 bg-black p-2 text-white"
    >
      <div className="flex items-center justify-start gap-2 px-1 py-1">
        <div className="py-1.5 px-2 bg-gradient-to-br from-black to-zinc-900 rounded-md">
          <Image
            priority
            onLoad={() => onLoad("extension")}
            src={ext}
            width={20}
            height={20}
            alt="album of the week"
          />
        </div>
        <p className="text-sm">InspectGPT - Spot AI content anywhere.</p>
      </div>
    </Link>
  );
}
