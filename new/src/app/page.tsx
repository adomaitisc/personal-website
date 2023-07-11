import { Expand } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden w-full h-screen bg-gray-200 grid place-items-center">
      <div className="max-w-3xl text-gray-700">
        <h1 className="text-2xl font-bold">Hello, I'm Cauã Adomaitis</h1>
        <p className="text-xl mt-2">
          Welcome to my website! I am a passionate freelance software and
          website developer with [X] years of experience in creating robust and
          user-friendly digital solutions. My expertise lies in [mention your
          specific areas of focus, such as web development, mobile app
          development, or software engineering].
        </p>
        <hr className="w-full h-0.5 mt-4 bg-gray-300" />
        <div className="max-w-3xl w-full mt-6 flex justify-between text-gray-400">
          <div className="flex bg-white/30 backdrop-blur-sm p-1 gap-1 rounded-full">
            <p className="px-4 py-1 hover:bg-gray-200 hover:text-gray-600 duration-500 rounded-full cursor-pointer">
              Home
            </p>
            <p className="px-4 py-1 hover:bg-gray-200 hover:text-gray-600 duration-500 rounded-full cursor-pointer">
              Blog
            </p>
            <p className="px-4 py-1 hover:bg-gray-200 hover:text-gray-600 duration-500 rounded-full cursor-pointer">
              Pictures
            </p>
          </div>
          <div className="flex bg-white/30 backdrop-blur-sm p-1 gap-1 rounded-full">
            <p className="px-4 py-1 hover:bg-gray-200 hover:text-gray-600 duration-500 rounded-full cursor-pointer">
              Github
            </p>
            <p className="px-4 py-1 hover:bg-gray-200 hover:text-gray-600 duration-500 rounded-full cursor-pointer">
              Linkedin
            </p>
          </div>
        </div>
      </div>
      <aside className="group cursor-pointer absolute bottom-0 right-0 overflow-hidden w-1/3 h-1/5 hover:h-[22%] hover:-rotate-1 hover:scale-105 duration-300 ease-out rounded-tl-lg shadow-lg">
        <div className="relative">
          <Image
            src="/media/aditis.png"
            className="opacity-90"
            alt="none"
            height={1080}
            width={1920}
          />
          <div className="group-hover:opacity-100 grid place-items-center bg-gray-600/80 text-lg opacity-0 absolute top-2 left-2 p-2 text-white duration-300 ease-out rounded-full hover:bg-gray-400">
            <Expand size={24} className="shrink-0" />
          </div>
        </div>
      </aside>
      <aside className="group cursor-pointer absolute bottom-0 left-1/3 overflow-hidden w-1/6 h-1/4 hover:h-[27%] hover:rotate-1 hover:scale-105 duration-300 ease-out rounded-t-lg shadow-lg">
        <div className="relative">
          <Image
            src="/media/inspect-gpt.svg"
            className="opacity-90"
            alt="none"
            height={1080}
            width={1920}
          />
          <div className="group-hover:opacity-100 grid place-items-center text-gray-600 text-lg opacity-0 absolute top-2 right-2 p-2 bg-white/80 duration-300 ease-out rounded-full hover:bg-gray-400">
            <Expand size={24} className="shrink-0" />
          </div>
        </div>
      </aside>
      <aside className="absolute bottom-0 left-0 bg-blue-400 w-1/4 h-1/6 rounded-tr-lg shadow-md"></aside>
    </main>
  );
}
