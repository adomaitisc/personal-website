import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export default function Home() {
  return (
    <main
      className="
    p-4 md:p-24
    bg-black/50 select-none flex flex-col items-center"
    >
      {/* Fixed Header */}
      <div className="fixed w-full px-4 z-10 md:px-24">
        <div className="max-w-4xl mx-auto w-full flex justify-between">
          <div className="flex gap-2 hover:border-neutral-700 text-neutral-500 hover:text-neutral-300 duration-300 bg-black/20 backdrop-blur-xl border border-neutral-800 rounded-[27px] overflow-hidden p-1">
            <div className="aspect-square h-[44px] rounded-full overflow-hidden relative">
              <Image
                alt="wow"
                fill
                src="/media/logo.svg"
                className="animate-spin"
              />
            </div>
            <h1 className="pr-4 my-auto text-lg md:text-xl font-bold">
              hello there
            </h1>
          </div>
          {/* <p className="md:hidden block text-white">sm</p> */}
          <div className="flex gap-2 hover:border-neutral-700 text-neutral-500 duration-300 bg-black/20 backdrop-blur-xl border border-neutral-800 rounded-[27px] overflow-hidden p-1">
            <Link
              href="https://github.com/adomaitisc"
              target="_blank"
              className="aspect-square h-[44px] rounded-full overflow-hidden grid place-items-center hover:text-neutral-300 hover:bg-neutral-800 duration-200 cursor-pointer"
            >
              <Github size={18} />
            </Link>
            <Link
              href="https://linkedin.com/in/cauaadomaitis"
              target="_blank"
              className="aspect-square h-[44px] rounded-full overflow-hidden grid place-items-center hover:text-neutral-300 hover:bg-neutral-800 duration-200 cursor-pointer"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="mailto:adomaitisc@wit.edu"
              className="aspect-square h-[44px] rounded-full overflow-hidden grid place-items-center hover:text-neutral-300 hover:bg-neutral-800 duration-200 cursor-pointer"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </div>
      {/* Content */}
      <div
        className="
        pt-48 max-w-4xl flex-col relative flex gap-4 justify-center items-center"
      >
        {/* Text */}
        <div className="flex-1 space-y-8 text-neutral-200">
          <h1 className="text-2xl tracking-wide">
            <Balancer>
              <span className="text-neutral-500">cauã adomaitis</span>,
              fullstack developer from brazil, based in boston. moved by
              creativity and innovation, from eccentric design decisions to
              complex code and organized database management. crafting a great
              user experience is my main goal.
            </Balancer>
          </h1>
          <h1 className="text-2xl tracking-wide">
            <Balancer>
              currenlty creating things at{" "}
              <Link
                href="https://qualidadeinteligente.com.br/"
                target="_blank"
                className="text-neutral-500 hover:text-neutral-300 hover:underline duration-200"
              >
                qualidade inteligente
              </Link>{" "}
              and{" "}
              <Link
                href="https://aditis.com.br"
                target="_blank"
                className="text-neutral-500 hover:text-neutral-300 hover:underline duration-200"
              >
                aditis
              </Link>
              . studying computer science at{" "}
              <Link
                href="https://wit.edu/"
                target="_blank"
                className="text-neutral-500 hover:text-neutral-300 hover:underline duration-200"
              >
                wentworth institute of technology
              </Link>
              .
            </Balancer>
          </h1>
          <h1 className="text-2xl tracking-wide">
            <Balancer>
              get in touch via{" "}
              <Link
                href="mailto:adomaitisc@wit.edu"
                className="text-neutral-500 hover:text-neutral-300 hover:underline duration-200"
              >
                email
              </Link>{" "}
              to create something cool.
            </Balancer>
          </h1>
        </div>
        {/* Images */}
        <div className="w-full mt-32 space-y-4">
          <h2 className="text-2xl text-neutral-600 tracking-wide">
            latest creations at aditis
          </h2>
          <div
            className="aspect-video w-full flex justify-center items-center rounded-3xl border border-neutral-800"
            style={{
              backgroundColor: "#58785d",
              backgroundImage:
                "repeating-radial-gradient( circle at 0 0, transparent 0, #58785d 30px ), repeating-linear-gradient( #010101, #58785d )",
              backgroundBlendMode: "multiply",
              backgroundSize: "100%",
              backgroundPosition: "center",
            }}
          >
            <div className="relative w-4/5 aspect-video">
              <Image
                src="/media/aditis-window.png"
                alt="aditis"
                fill
                className="brightness-95"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="aspect-video w-full flex justify-center items-center rounded-3xl border border-neutral-800 bg-neutral-900/20">
              <div className="relative w-4/5 aspect-video">
                <Image
                  src="/media/aditis-close-1.png"
                  alt="aditis"
                  fill
                  className="rounded-md brightness-95"
                />
              </div>
            </div>
            <div className="aspect-video w-full flex justify-center items-center rounded-3xl border border-neutral-800 bg-neutral-900/80">
              <div className="relative w-4/5 aspect-video">
                <Image
                  src="/media/aditis-close-2.png"
                  alt="aditis"
                  fill
                  className="rounded-md brightness-95"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className=" text-neutral-500 max-w-4xl w-full mt-32 flex justify-between">
          <p className="text-neutral-300">made by cauã adomaitis - 2023</p>
          <p>
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="hover:text-neutral-300 hover:underline duration-200"
            >
              nextjs
            </Link>
            {" - "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              className="hover:text-neutral-300 hover:underline duration-200"
            >
              tailwindcss
            </Link>
            {" - "}
            <Link
              href="https://vercel.com"
              target="_blank"
              className="hover:text-neutral-300 hover:underline duration-200"
            >
              vercel
            </Link>
            {" - "}
            <Link
              href="https://react-wrap-balancer.vercel.app/"
              target="_blank"
              className="hover:text-neutral-300 hover:underline duration-200"
            >
              react balancer
            </Link>
            {" - "}
            <Link
              href="https://lucide.dev"
              target="_blank"
              className="hover:text-neutral-300 hover:underline duration-200"
            >
              lucide icons
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
