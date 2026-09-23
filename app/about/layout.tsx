import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Nehan Wijayagunarathna — IT student at University of Moratuwa with a CGPA of 3.99. Full-Stack Developer and DevOps enthusiast with experience in React, Next.js, FastAPI, Docker, and cloud computing. Dean's List recipient and cybersecurity competitor.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Me | Nehan Wijayagunarathna",
    description:
      "IT student at University of Moratuwa, Software Engineer Intern at IF Solutions, Rotaract IT Developer. Skilled in full-stack development and DevOps.",
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "About Nehan Wijayagunarathna",
      },
    ],
  },

};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
