import "./globals.css";
import type { Metadata } from "next";
import { Questrial } from "next/font/google";

const questrial = Questrial({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fullstack developer | cauã adomaitis",
  description:
    "full-stack developer from brazil, based in boston. passionate about creativity, innovation, and crafting exceptional user experiences. get in touch to collaborate.",
  openGraph: {
    title: "fullstack developer | cauã adomaitis",
    description:
      "full-stack developer from brazil, based in boston. passionate about creativity, innovation, and crafting exceptional user experiences. get in touch to collaborate.",
    url: "https://adomaitisc.com",
    type: "website",
    siteName: "cauã adomaitis",
  },
  twitter: {
    title: "fullstack developer | cauã adomaitis",
    description:
      "full-stack developer from brazil, based in boston. passionate about creativity, innovation, and crafting exceptional user experiences. get in touch to collaborate.",
    card: "summary_large_image",
    site: "@adomaitisc",
    creator: "@adomaitisc",
  },
  generator: "Vercel",
  applicationName: "caua adomaitis | personal website",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Fullstack",
    "Developer",
    "Websites",
    "Applications",
    "iOS App",
    "Web App",
    "Next.js Development",
    "React Development",
    "JavaScript Development",
    "Fullstack Development",
    "Website Development",
    "Application Development",
    "iOS App Development",
    "Web App Development",
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Responsive Web Design",
    "Cross-Platform Development",
    "API Integration",
    "Database Management",
    "Custom Web Solutions",
    "E-commerce Development",
    "Mobile-Friendly Websites",
    "Performance Optimization",
    "Code Refactoring",
    "Technical Consultation",
    "Collaboration Opportunities",
    "Project Partnership",
    "Freelance Developer",
    "Remote Developer",
  ],
  category: "developer",
  manifest: "/manifest.json",
  authors: { name: "caua", url: "https://adomaitisc.com" },
  colorScheme: "dark",
  themeColor: "#333333",
  creator: "Cauã Adomaitis",
  publisher: "Cauã Adomaitis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={questrial.className}>{children}</body>
    </html>
  );
}
