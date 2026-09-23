import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nehan Wijayagunarathna — Full-Stack Developer and DevOps enthusiast open to internships, collaborations, and new opportunities. Reach out via LinkedIn, GitHub, or email.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact | Nehan Wijayagunarathna",
    description:
      "Open to new opportunities and collaborations. Connect with Nehan via LinkedIn, GitHub, or email.",
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Nehan Wijayagunarathna",
      },
    ],
  },

};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
