import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse projects by Nehan Wijayagunarathna — full-stack and DevOps applications built with React, Next.js, TypeScript, FastAPI, Docker, Kubernetes, Supabase, and PostgreSQL. Scalable, production-grade software solutions.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title: "Projects | Nehan Wijayagunarathna",
    description:
      "Full-stack and DevOps projects built with React, Next.js, FastAPI, Docker, and Cloud infrastructure.",
    url: `${siteConfig.url}/projects`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Projects by Nehan Wijayagunarathna",
      },
    ],
  },

};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
