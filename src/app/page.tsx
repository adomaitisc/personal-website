import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import { TextReveal } from "./text-reveal";

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
              <TextReveal>hello there</TextReveal>
            </h1>
          </div>
          {/* <p className="md:hidden block text-white">sm</p> */}
          <div className="flex gap-2 hover:border-neutral-700 text-neutral-500 duration-300 bg-black/20 backdrop-blur-xl border border-neutral-800 rounded-[27px] overflow-hidden p-1">
            <Link
              href="https://github.com/adomaitisc"
              target="_blank"
              className="aspect-square h-[44px] rounded-full overflow-hidden grid text-neutral-500 place-items-center hover:text-neutral-300 hover:bg-neutral-800 duration-200 cursor-pointer"
            >
              <Github size={18} />
            </Link>
            <Link
              href="https://linkedin.com/in/cauaadomaitis"
              target="_blank"
              className="aspect-square h-[44px] rounded-full overflow-hidden grid text-neutral-500 place-items-center hover:text-neutral-300 hover:bg-neutral-800 duration-200 cursor-pointer"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="https://read.cv/adomaitis"
              target="_blank"
              className="group aspect-square h-[44px] rounded-full overflow-hidden grid text-neutral-500 place-items-center hover:text-neutral-300 hover:bg-neutral-800 duration-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.809 5.242a1.25 1.25 0 00-1.531.884L6.042 18.2a1.25 1.25 0 00.884 1.53l9.66 2.59a1.25 1.25 0 001.53-.885l3.236-12.074a1.25 1.25 0 00-.884-1.53l-9.66-2.589zm-2.98.496a2.75 2.75 0 013.368-1.945l9.66 2.588A2.75 2.75 0 0122.8 9.75l-3.236 12.074a2.75 2.75 0 01-3.368 1.945L6.538 21.18a2.75 2.75 0 01-1.944-3.368L7.829 5.738z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.518 8.27a.75.75 0 01.919-.53l7.241 1.94a.75.75 0 01-.388 1.449l-7.242-1.94a.75.75 0 01-.53-.919zM9.677 11.41a.75.75 0 01.918-.531l7.242 1.94a.75.75 0 11-.388 1.45l-7.242-1.941a.75.75 0 01-.53-.919zM8.836 14.549a.75.75 0 01.918-.53l4.83 1.293a.75.75 0 11-.388 1.45l-4.83-1.295a.75.75 0 01-.53-.918z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
            <Link
              href="mailto:hello@adomaitisc.com"
              className="aspect-square h-[44px] rounded-full overflow-hidden grid place-items-center text-neutral-600 hover:text-neutral-900 hover:bg-white bg-neutral-200 duration-200 cursor-pointer"
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
              creativity and innovation, from product design to complex coding
              and organized system design. crafting a great product is my main
              goal.
            </Balancer>
          </h1>

          <h1 className="text-2xl tracking-wide">
            <Balancer>
              creating for{" "}
              <Link
                href="https://qualidadeinteligente.com.br/"
                target="_blank"
                className="text-neutral-500 hover:text-neutral-300 hover:underline duration-200"
              >
                qualidade inteligente
              </Link>
              , for friends, and for fun.
            </Balancer>
          </h1>
          <h1 className="text-2xl tracking-wide">
            <Balancer>
              studying computer science at{" "}
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
              co-founder of{" "}
              <Link
                href="https://www.aditis.com.br"
                className="text-neutral-500 hover:text-neutral-300 hover:underline duration-200"
              >
                aditis
              </Link>
              , my first saas.
            </Balancer>
          </h1>
          {/* <h1 className="text-2xl tracking-wide">
            <Balancer>
              get in touch via{" "}
              <Link
                href="mailto:hello@adomaitisc.com"
                className="text-neutral-500 hover:text-neutral-300 hover:underline duration-200"
              >
                email
              </Link>{" "}
              to create something cool.
            </Balancer>
          </h1> */}
        </div>
        {/* Projects */}
        <div className="w-full flex flex-col gap-20 mt-20">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-wide">
              <Link
                href="https://simple-bookmarks-six.vercel.app"
                target="_blank"
                className="text-neutral-500 flex gap-3 items-center hover:text-neutral-300 hover:underline duration-200"
              >
                simple bookmarks
                <ExternalLink size={22} />
              </Link>
            </h2>
            <h3 className="text-2xl tracking-wide">
              <Balancer>
                bookmarking web app, open to public, auth with github oauth.
                made it over a weekend after weeks waiting for a response from
                rauno, the original creator.
              </Balancer>
            </h3>
            <div
              className="aspect-video border border-neutral-800 rounded-3xl overflow-hidden py-10"
              style={{
                backgroundColor: "#58785d",
                backgroundImage:
                  "repeating-radial-gradient( circle at 0 0, transparent 0, #58785d 30px ), repeating-linear-gradient( #010101, #58785d )",
                backgroundBlendMode: "multiply",
                backgroundSize: "100%",
              }}
            >
              <div className="relative aspect-video w-4/5 mx-auto my-auto">
                <Image src="/media/simple-bookmarks.png" alt="bookmarks" fill />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl tracking-wide">
              <Link
                href="https://solucao-simac.vercel.app"
                target="_blank"
                className="text-neutral-500 flex gap-3 items-center hover:text-neutral-300 hover:underline duration-200"
              >
                simac solution
                <ExternalLink size={22} />
              </Link>
            </h2>
            <h3 className="text-2xl tracking-wide">
              <Balancer>
                the website from brazil{"'"}s government is broken. the ssl
                certificate is invalid, and the server is (very) unstable. my
                solution is reliable and fast.
              </Balancer>
            </h3>
            <div
              className="aspect-video border border-neutral-800 rounded-3xl overflow-hidden py-10"
              style={{
                backgroundColor: "#58785d",
                backgroundImage:
                  "repeating-radial-gradient( circle at 0 0, transparent 0, #58785d 30px ), repeating-linear-gradient( #010101, #58785d )",
                backgroundBlendMode: "multiply",
                backgroundSize: "100%",
              }}
            >
              <div className="relative aspect-video w-4/5 mx-auto my-auto">
                <Image src="/media/simac-solution.png" alt="simac" fill />
              </div>
            </div>
          </div>
        </div>
        {/* Images */}
        <div className="w-full mt-20 space-y-4">
          <h2 className="text-2xl text-neutral-500 tracking-wide">
            aditis technological control
          </h2>
          <h3 className="text-2xl tracking-wide">
            <Balancer>
              currently crafting a solution for construction companies to track
              the progress of their concrete puring and testing.
            </Balancer>
          </h3>
          <div
            className="aspect-video w-full flex justify-center items-center rounded-3xl border border-neutral-800"
            style={{
              backgroundColor: "#58785d",
              backgroundImage:
                "repeating-radial-gradient( circle at 0 0, transparent 0, #58785d 30px ), repeating-linear-gradient( #010101, #58785d )",
              backgroundBlendMode: "multiply",
              backgroundSize: "100%",
            }}
          >
            <div className="relative w-4/5 aspect-video">
              <Image
                src="/media/aditis.png"
                alt="aditis"
                fill
                className="brightness-95"
              />
            </div>
          </div>
          {/* <div className="flex gap-4 flex-col md:flex-row">
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
          </div> */}
        </div>
        {/* Footer */}
        <div className=" text-neutral-500 max-w-4xl w-full mt-32 flex flex-col gap-2 md:flex-row items-center md:justify-between">
          <p className="text-neutral-300">
            <Balancer>made by cauã adomaitis - 2023</Balancer>
          </p>
          <p className="text-center md:text-right">
            <Balancer>
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
            </Balancer>
          </p>
        </div>
      </div>
    </main>
  );
}
