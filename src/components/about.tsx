import Image from "next/image";

import profilePic from "../../public/images/IMG_1294.png";

export function About() {
  return (
    <div className="flex w-[366px] flex-col gap-4 rounded-2xl border border-white/10 bg-black p-6 text-white">
      <Image
        priority
        src={profilePic}
        alt="me"
        className="h-[93px] w-[93px] rounded-full object-cover shadow-lg shadow-white/10"
      />
      <h1 className="text-2xl font-medium">Cauã Adomaitis</h1>
      <p className="text-sm text-white/60">
        Fullstack developer from São Paulo, based in Boston.
      </p>
      <p className="text-sm text-white/60">
        I am currently developing{" "}
        <span className="text-white">qualidadeinteligente</span>, and studying
        Computer Science.
      </p>
    </div>
  );
}
