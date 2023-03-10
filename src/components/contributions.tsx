import Link from "next/link";
import Image from "next/image";

import githubContributions from "../../public/images/contributions.svg";

export function Contributions({ onLoad }: { onLoad: (e: string) => void }) {
  return (
    <Link
      href="https://github.com/adomaitisc"
      target="_blank"
      className="group flex w-[366px] cursor-pointer hover:bg-white/10 duration-150 flex-col rounded-2xl border border-white/10 bg-black p-6 text-white"
    >
      <Image
        onLoad={() => onLoad("contributions")}
        priority
        src={githubContributions as string}
        alt="contributions"
        className="duration-300 group-hover:scale-110"
      />
      <p className="text-sm font-medium">github/adomaitisc</p>
    </Link>
  );
}
