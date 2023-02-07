import Image from "next/image";
import Link from "next/link";

import profilePic from "../../public/images/IMG_1294.png";

export function About({ onLoad }: { onLoad: (e: string) => void }) {
  return (
    <div className="flex w-[366px] flex-col gap-4 rounded-2xl border border-white/10 bg-black p-6 text-white">
      <Image
        onLoad={() => onLoad("about")}
        priority
        src={profilePic}
        alt="me"
        className="h-[93px] w-[93px] rounded-full object-cover shadow-lg shadow-white/10"
      />
      <h1 className="text-2xl font-medium">Cauã Adomaitis</h1>
      <p className="text-sm text-white/60">
        Fullstack engineer from São Paulo, based in Boston.
      </p>
      <p className="text-sm text-white/60">
        Currently developing{" "}
        <Link
          href="https://qualidadeinteligente.com.br"
          target="_blank"
          className="text-white"
        >
          qualidadeinteligente
        </Link>
        , and studying Computer Science.
      </p>
    </div>
  );
}
