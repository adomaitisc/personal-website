import { Expand, Mail } from "lucide-react";
import Image from "next/image";
import { BackgroundTiling } from "./background-tiling";
import * as Popover from "@radix-ui/react-popover";
import { SocialPopover } from "./socials-popover";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: "url(/media/backgroundd.png)",
        backgroundSize: "cover",
      }}
    >
      {/* Fixed Header */}
      <div className="p-24 w-full flex fixed justify-between z-20 text-white/80">
        <SocialPopover />
        <div className="group hover:text-white hover:border-white/30 duration-200 cursor-pointer bg-zinc-600/30 backdrop-blur-3xl border border-white/20 rounded-full items-center flex pl-4 py-1 pr-1 gap-4">
          <p className="text-xl">Get in touch</p>
          <div className="aspect-square h-[44px] rounded-full duration-200 group-hover:rotate-6 overflow-hidden relative bg-zinc-600 grid place-items-center">
            <Mail />
          </div>
        </div>
      </div>

      {/* Backgroun Tiles */}
      <BackgroundTiling />

      {/* Content Overlay */}
      <div className="z-10 top-0 left-0 w-full h-full">
        {/* Fixed Header */}

        {/* Hero Section */}
        <div className="h-screen relative px-24 flex flex-col z-10 justify-center text-white/80">
          {/* Text */}
          <div className="mt-40">
            <h1 className="text-5xl text-white">
              Hello There, I am Cauã Adomaitis,
            </h1>
            <h1 className="text-5xl text-white">
              full-stack developer from Brazil.
            </h1>
            <p className="text-3xl mt-4 text-white">
              I build apps for web, mobile, and desktop.
            </p>
            <div className="flex gap-6">
              <button className="group hover:text-white hover:border-white/30 duration-200 bg-zinc-600/30 backdrop-blur-3xl border border-white/20 mt-8 rounded-full text-xl flex justify-between items-center py-1 pl-4 pr-1 gap-4">
                More about me
                <div className="aspect-square h-[44px] duration-200 rounded-full overflow-hidden p-2.5 relative bg-zinc-600 grid place-items-center">
                  <div className="rounded-full border-2 border-white h-full w-full " />
                  <div className="absolute top-1/2 -translate-y-1/2 duration-200 h-1 w-1 group-hover:h-3 group-hover:w-0.5 bg-white rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 duration-200 h-1 w-1 group-hover:w-3 group-hover:h-0.5 bg-white rounded-full" />
                </div>
              </button>
              <button className="group hover:text-white hover:border-white/30 duration-200 bg-zinc-600/30 backdrop-blur-3xl border border-white/20 mt-8 rounded-full text-xl flex justify-between items-center py-1 pl-4 pr-1 gap-4">
                Projects
                <div className="aspect-square h-[44px] duration-200 rounded-full overflow-hidden p-2.5 relative bg-zinc-600 grid place-items-center">
                  <div className="rounded-full border-2 border-white h-full w-full " />
                  <div className="absolute top-1/2 -translate-y-1/2 duration-200 h-1 w-1 group-hover:h-3 group-hover:w-0.5 bg-white rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 duration-200 h-1 w-1 group-hover:w-3 group-hover:h-0.5 bg-white rounded-full" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
