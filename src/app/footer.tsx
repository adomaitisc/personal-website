import Link from "next/link";
import Balancer from "react-wrap-balancer";

export function Footer() {
  return (
    <footer className=" text-neutral-500 max-w-4xl w-full mt-32 flex flex-col gap-2 md:flex-row items-center md:justify-between">
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
    </footer>
  );
}
