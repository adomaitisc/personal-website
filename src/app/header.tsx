import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "./text-reveal";

export function Header() {
  return (
    <header className="fixed w-full px-4 z-10 md:px-24 top-16 select-none">
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
    </header>
  );
}
