"use client";

import React, { useEffect, useState } from "react";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
import Loader from "@/components/Loader";

export default function ClientLayout({
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

  if (!hydrated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-background)]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Desktop Navbar - Hidden on mobile */}
      <div className="hidden md:block absolute left-15 z-10 h-full bg-(--color-accent1)">
        <DesktopNavbar />
      </div>
      {/* Mobile Navbar - Hidden on desktop */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>
      <main className="bg-(--color-secondary) md:mx-15 md:mb-10 md:px-20 h-screen">
        <div>{children}</div>
      </main>
    </div>
  );
}
