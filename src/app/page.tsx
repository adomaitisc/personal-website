import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import { TextReveal } from "./text-reveal";
import { Contributions } from "./contributions";
import { Project } from "./project";
import { Header } from "./header";
import { Footer } from "./footer";

// http://localhost:3000

async function getContributions() {
  let thisYear = new Date().getFullYear();

  let res = await fetch(
    `https://github-contributions-n55umvkfm-adomaitisc.vercel.app/adomaitisc/${thisYear}`
  );

  let data = await res.json();

  return data;
}

export default async function Home() {
  const ghub = await getContributions();
  return (
    <>
      {/* Header */}
      <Header />

      <main className="p-4 md:p-24 bg-black/50 select-none flex flex-col items-center w-full relative overflow-hidden">
        {/* Content */}
        <div
          className="
        pt-48 max-w-4xl mx-auto flex-col relative flex gap-4 justify-center items-center"
        >
          <div className="flex-1 space-y-8 text-neutral-200">
            <h1 className="text-7xl opacity-5">cauã adomaitis</h1>

            <h1 className="text-2xl tracking-wide">
              <Balancer>
                hello there, i&apos;m a fullstack developer from brazil, based
                in boston. moved by creativity and innovation, from product
                design to complex coding and organized system design. crafting a
                great product is my main goal.
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
          </div>

          {/* New Projects */}

          {/* Projects */}
          <div className="w-full flex flex-col pt-10">
            <h1 className="text-7xl pt-20 opacity-5">a few projects</h1>
            <Project
              title="github contributions api"
              link="https://github-contributions-api-pied.vercel.app/"
              description="simple api made with next.js hosted on vercel that scrapes the
                  desired user's github contributions calendar and returns
                  a json object with data for the graph."
            >
              <Contributions data={ghub} />
            </Project>
            <Project
              title="simple bookmarks"
              link="https://simple-bookmarks-six.vercel.app"
              description="bookmarking web app, open to public, auth with github oauth.
                  made it over a weekend after weeks waiting for a response from
                  rauno, the original creator."
              image="/media/simple-bookmarks.png"
            />
            <Project
              title="inspect gpt"
              link="https://inspectgpt.com"
              description="chrome extension developed at the gpt boom, designed to
                  identify ai-generated content on almost every webpage. someone
                  even copied it from my github."
              image="/media/inspect.png"
            />
            <Project
              title="simac solution"
              link="https://solucao-simac.vercel.app"
              description="the website from brazil's government is broken. the ssl
                  certificate is invalid, and the server is (very) unstable. my
                  solution is reliable and fast."
              image="/media/simac-solution.png"
            />
            <Project
              title="aditis technologies"
              description="currently crafting a solution for construction companies to
                  track the progress of their concrete pouring and testing.
                  adits is becoming my first company."
              image="/media/aditis.png"
            />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}
