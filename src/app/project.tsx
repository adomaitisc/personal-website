import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  // optional
  image?: string;
  link?: string;
  children?: React.ReactNode;
}

export function Project(props: ProjectProps) {
  return (
    <div className="space-y-4 py-10">
      <h2 className="text-2xl tracking-wide">
        {props.link ? (
          <Link
            href={props.link}
            target="_blank"
            className="text-neutral-500 inline-block hover:text-neutral-300 hover:underline duration-200"
          >
            <span className="flex gap-3 items-center justify-center">
              {props.title}
              <ExternalLink size={22} />
            </span>
          </Link>
        ) : (
          <span className="text-neutral-500">{props.title}</span>
        )}
      </h2>
      <h3 className="text-2xl tracking-wide">
        <Balancer>{props.description}</Balancer>
      </h3>
      {props.children}
      {props.image && (
        <div className="aspect-video relative overflow-hidden">
          <Image src={props.image} alt={props.title} fill />
        </div>
      )}
    </div>
  );
}
