'use client';
import localFont from "next/font/local";
import "./globals.css";

import DesktopNavbar from "@/components/DesktopNavbar";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHydrated(true);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en" className={`${formaDJR.variable} ${neuePlak.variable}`}>
      <body className={`${formaDJR.className} overflow-hidden`}>
        {!hydrated ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-background)]">
            <Loader />
          </div>
        ) : (
          <div className="relative h-screen overflow-hidden">
            {/* Desktop Navbar - Hidden on mobile */}
            <div className="hidden md:block absolute left-15 z-10 h-full bg-(--color-accent1)">
              <DesktopNavbar />
            </div>
            <main className="bg-(--color-secondary) md:mx-15 md:mb-10 md:px-20 h-screen">
              <div>{children}</div>
            </main>
          </div>
        )}
      </body>
    </html>
  );
}
