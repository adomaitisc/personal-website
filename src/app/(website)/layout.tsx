import "../globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Questrial } from "next/font/google";

const questrial = Questrial({ weight: "400", subsets: ["latin"] });

const creator = "cauã adomaitis";
const title = "cauã adomaitis | fullstack developer";
const description =
  "full-stack developer from brazil, based in boston. passionate about creativity, innovation, and crafting exceptional user experiences. get in touch to collaborate.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://adomaitisc.com",
    type: "website",
    siteName: title,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    site: "@adomaitisc",
    creator: "@adomaitisc",
  },
  generator: "Vercel",
  applicationName: title,
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
  authors: { name: creator, url: "https://adomaitisc.com" },
  colorScheme: "dark",
  themeColor: "#333333",
  creator,
  publisher: creator,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={questrial.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
