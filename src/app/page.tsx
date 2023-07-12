import { ArrowDown, ArrowUpRight, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative select-none overflow-hidden w-full px-4 bg-gray-200 flex flex-col items-center">
      <div className="max-w-3xl px-4 w-full fixed z-10 mt-6 flex flex-col gap-2 sm:flex-row justify-between text-gray-500">
        <div className="flex bg-white/60 backdrop-blur-md border border-gray-300 shadow p-1 gap-1 rounded-full">
          <p className="px-4 py-1 hover:bg-gray-200 hover:text-gray-600 duration-500 rounded-full">
            Olá, seja bem vindo
          </p>
          {/* <p className="px-4 py-1 hover:bg-gray-200 hover:text-gray-600 duration-500 rounded-full cursor-pointer">
            Writing
          </p>
          <p className="px-4 py-1 hover:bg-gray-200 hover:text-gray-600 duration-500 rounded-full cursor-pointer">
            Pictures
          </p> */}
        </div>
        <div className="flex bg-white/60 backdrop-blur-md border border-gray-300 shadow p-1 gap-1 rounded-full">
          <Link
            href="https://github.com/adomaitisc"
            className="px-4 py-1 hover:bg-gray-200 hover:text-gray-600 duration-500 rounded-full cursor-pointer"
          >
            Github
          </Link>
          <Link
            href="https://linkedin.com/in/cauaadomaitis"
            className="px-4 py-1 hover:bg-gray-200 hover:text-gray-600 duration-500 rounded-full cursor-pointer"
          >
            Linkedin
          </Link>
        </div>
      </div>
      <div className="max-w-3xl pt-72 pb-36 text-gray-600">
        <h1 className="text-2xl font-bold px-2">
          Welcome, I&apos;m Cauã Adomaitis
        </h1>
        <p className="text-lg sm:text-xl mt-2 px-2 text-gray-500 leading-tight sm:leading-normal">
          My journey as a developer started 6 years ago, developing
          web-scrapers. Currently I develop websites, web applications, and
          mobile apps. My knowledge spans from intricate parts of backend to
          sutile styles and patterns of the frontend.
        </p>
        <button className="rounded-full p-1 mt-6 bg-green-300/80 border border-gray-300">
          <Link
            className="w-full h-full hover:bg-black/5 flex items-center gap-2 px-4 py-1 duration-300 rounded-full text-gray-600"
            href="mailto:adomaitisc@wit.edu"
          >
            Send me an email <ArrowUpRight size={18} />
          </Link>
        </button>
      </div>
      <hr className="w-full max-w-3xl h-0.5 bg-gray-300" />
      <div className="max-w-3xl py-36 text-gray-600">
        <p className="px-2 text-gray-400 text-lg mb-6">
          Latest projects and creations
        </p>
        <div className="shadow aspect-video relative w-full border border-gray-300 bg-gray-300 rounded-3xl overflow-hidden">
          <Image
            className="opacity-90"
            src="/media/aditis.png"
            alt="aditis"
            height={1080}
            width={1920}
          />
        </div>
        <h1 className="text-xl sm:text-2xl mt-6 font-bold px-2 flex gap-4">
          Aditis - Software solutions for the construction industry
          <Link
            href="https://aditis-controle.vercel.app"
            className="group text-gray-500 p-1"
          >
            <LinkIcon
              size={20}
              className="group-hover:rotate-180 duration-150"
            />
          </Link>
        </h1>
        <p className="text-lg sm:text-xl mt-2 px-2 text-gray-500 leading-tight sm:leading-normal">
          I recently finished the first tool of a suite for the construction
          industry in Brazil. The company, Aditis, has the goal to simplify the
          tracking proccess in construction sites, relying on a intuitive
          interface and simple to use software.
        </p>
      </div>
      <div className="max-w-3xl pb-36 text-gray-600">
        <div className="shadow aspect-video relative w-full border border-gray-300 bg-gray-300 rounded-3xl overflow-hidden">
          <Image
            className="opacity-90 "
            src="/media/inspect.png"
            alt="aditis"
            height={1080}
            width={1920}
          />
        </div>
        <h1 className="text-xl sm:text-2xl mt-6 font-bold px-2 flex gap-4">
          InspectGPT - Experiment with chrome extensions
          <Link
            href="https://inspectgpt.com"
            className="group text-gray-500 p-1"
          >
            <LinkIcon
              size={20}
              className="group-hover:rotate-180 duration-150"
            />
          </Link>
        </h1>
        <p className="text-lg sm:text-xl mt-2 px-2 text-gray-500 leading-tight sm:leading-normal">
          With the release of ChatGPT, some concerns aroused on the web about
          ai-generated content, and it sparked my imagination. I developed this
          simple AI detector with the help of HuggingFace GPT-2 output detector.
        </p>
      </div>
      <hr className="w-full max-w-3xl h-0.5 bg-gray-300" />

      {/* <div className="max-w-3xl py-36 text-gray-600">
        <p className="text-gray-400 text-lg mb-6 px-2">Hobbies and interests</p>
        <div className="shadow aspect-video relative w-full border border-gray-300 bg-gray-300 rounded-3xl overflow-hidden">
          <Image
            className="opacity-90 "
            src="/media/turtle.png"
            alt="aditis"
            height={384}
            width={768}
          />
        </div>
        <h1 className="text-xl sm:text-2xl mt-6 font-bold px-2 flex gap-4">
          Diving - Exploring the ocean
        </h1>
        <p className="text-lg sm:text-xl mt-2 px-2 text-gray-500 leading-tight sm:leading-normal">
          Over the past few years, I have cultivated a passion for the ocean and
          the creatures that inhabit it. It is thrilling to dive and experience
          a whole new world all around. Sharks and whales are what captivate me
          the most.
        </p>
      </div>
      <div className="max-w-3xl pb-36 text-gray-600">
        <div className="shadow aspect-video relative w-full border border-gray-300 bg-gray-300 rounded-3xl overflow-hidden">
          <Image
            className="opacity-90 "
            src="/media/marrakech.png"
            alt="aditis"
            height={1080}
            width={1920}
          />
        </div>
        <h1 className="text-xl sm:text-2xl mt-6 font-bold px-2 flex gap-4">
          Traveling
        </h1>
        <p className="text-lg sm:text-xl mt-2 px-2 text-gray-500 leading-tight sm:leading-normal">
          I love traveling around the world and experiencing different cultures
          and breathing on different environments. Some trips have changed my
          perspective of life and some have recharged my energies.
        </p>
      </div>
      <hr className="w-full max-w-3xl h-0.5 bg-gray-300" />
      <div className="max-w-3xl py-36 text-gray-600">
        <p className="text-gray-400 text-lg mb-6 px-2">
          Thank you for you attention.
        </p>
        <p className="text-lg sm:text-xl mt-2 px-2 text-gray-500 leading-tight sm:leading-normal">
          If you reached the end, you might have a slight idea of who am I.
          I&apos;m always eager to start a new project, and if you&apos;d like
          to work with me, feel free to send me an email.
        </p>
      </div> */}
      {/* <aside className="group cursor-pointer absolute bottom-0 right-0 overflow-hidden w-1/3 h-1/5 hover:h-[22%] hover:-rotate-1 hover:scale-105 duration-300 ease-out rounded-tl-lg shadow-lg">
        <div className="relative">
          <Image
            src="/media/aditis.png"
            className="opacity-90"
            alt="none"
            height={1080}
            width={1920}
          />
          <div className="group-hover:opacity-100 grid place-items-center bg-gray-600/80 text-lg opacity-0 absolute top-2 left-2 p-2 text-white duration-300 ease-out rounded-full hover:bg-gray-400">
            <Expand size={20} className="shrink-0" />
          </div>
        </div>
      </aside>
      <aside className="group cursor-pointer absolute bottom-1/3 -left-40 overflow-hidden w-1/6 h-1/4 hover:h-[29%] rotate-45 hover:rotate-[52deg] hover:scale-105 duration-300 ease-out rounded-t-lg shadow-lg">
        <div className="relative">
          <Image
            src="/media/inspect-gpt.svg"
            className="opacity-90"
            alt="none"
            height={1080}
            width={1920}
          />
          <div className="group-hover:opacity-100 grid place-items-center text-gray-600 text-lg opacity-0 absolute top-2 right-2 p-2 bg-white/80 duration-300 ease-out rounded-full hover:bg-gray-400">
            <Expand size={20} className="shrink-0" />
          </div>
        </div>
      </aside>
      <aside className="absolute bottom-0 left-0 bg-blue-400 w-1/4 h-1/6 rounded-tr-lg shadow-md"></aside> */}
    </main>
  );
}
