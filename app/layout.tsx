import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { siteConfig } from "@/lib/site-config";

const formaDJR = localFont({
  src: [
    {
      path: "../public/fonts/FormaDJRMicro-Regular-Testing.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FormaDJRMicro-Medium-Testing.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-forma",
});

const neuePlak = localFont({
  src: [
    {
      path: "../public/fonts/Neue Plak Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Neue Plak Condensed Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-plak",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Nehan Wijayagunarathna",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  generator: "Next.js",
  keywords: [
    "Nehan Wijayagunarathna",
    "Nehan",
    "Full-Stack Developer",
    "DevOps Engineer",
    "Software Engineer",
    "University of Moratuwa",
    "Portfolio",
    "Sri Lanka Developer",
  ],
  referrer: "origin-when-cross-origin",
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description:
      "Full-Stack Developer and DevOps enthusiast building reliable, scalable software applications and cloud infrastructure.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nehan Wijayagunarathna - Full-Stack Developer & DevOps Portfolio",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "0mKxAplfbbwkYXRxeKXzFodRMvEXVxpcMac4JdPTI7g",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.author,
      url: siteConfig.url,
      jobTitle: "Full-Stack Developer & Software Engineer",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "University of Moratuwa",
        url: "https://uom.lk/",
      },
      knowsAbout: [
        "Full-Stack Development",
        "DevOps",
        "Cloud Computing",
        "Cybersecurity",
      ],
      sameAs: [siteConfig.linkedin, siteConfig.github, siteConfig.credly],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${formaDJR.variable} ${neuePlak.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${formaDJR.className} overflow-hidden`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
