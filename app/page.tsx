"use client";
import { useEffect, useRef, useState } from "react";
import "./globals.css";

import RoleType from "@/components/RoleType";

export default function Home() {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const mobileColumnRef = useRef<HTMLDivElement>(null);
  const [grayscaleValue, setGrayscaleValue] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [mouseOffset, setMouseOffset] = useState({ x: 5, y: 5 });

  useEffect(() => {
    // visit first
    const hasVisited = sessionStorage.getItem("visitedHome");
    if (!hasVisited) {
      if (leftColumnRef.current) {
        leftColumnRef.current.scrollTo({
          top: leftColumnRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
      if (mobileColumnRef.current) {
        mobileColumnRef.current.scrollTo({
          top: mobileColumnRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
      sessionStorage.setItem("visitedHome", "true");
    }

    // Desktop grayscale
    const handleDesktopScroll = () => {
      if (leftColumnRef.current) {
        const scrollTop = leftColumnRef.current.scrollTop;
        const scrollHeight =
          leftColumnRef.current.scrollHeight -
          leftColumnRef.current.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        const grayscaleStart = 60;
        let grayscale = 0;
        if (scrollPercentage > grayscaleStart) {
          const progress =
            (scrollPercentage - grayscaleStart) / (100 - grayscaleStart);
          grayscale = progress * 100;
        }
        setGrayscaleValue(Math.max(0, Math.min(100, grayscale)));
      }
    };

    // Mobile grayscale
    const handleMobileScroll = () => {
      if (mobileColumnRef.current) {
        const scrollTop = mobileColumnRef.current.scrollTop;
        const scrollHeight =
          mobileColumnRef.current.scrollHeight -
          mobileColumnRef.current.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        setGrayscaleValue(Math.max(0, Math.min(100, scrollPercentage)));
        if (scrollPercentage < 30) {
          const fadeStart = 0;
          const fadeEnd = 30;
          const fadeProgress =
            (scrollPercentage - fadeStart) / (fadeEnd - fadeStart);
          const opacity = 0.2 + fadeProgress * 0.8;
          setImageOpacity(Math.max(0.2, Math.min(1, opacity)));
        } else {
          setImageOpacity(1);
        }
      }
    };


    const handleMouseMove = (e: MouseEvent) => {
      const containerWidth = 500;
      const containerHeight = 500;
      const centerX = window.innerWidth - containerWidth / 2 - 5;
      const centerY = window.innerHeight / 2;
      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;
      setMouseOffset({
        x: Math.max(-5, Math.min(5, offsetX / 10)),
        y: Math.max(-5, Math.min(5, offsetY / 10)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const leftColumn = leftColumnRef.current;
    const mobileColumn = mobileColumnRef.current;
    if (leftColumn) {
      leftColumn.addEventListener("scroll", handleDesktopScroll);
    }
    if (mobileColumn) {
      mobileColumn.addEventListener("scroll", handleMobileScroll);
    }
    return () => {
      if (leftColumn)
        leftColumn.removeEventListener("scroll", handleDesktopScroll);
      if (mobileColumn)
        mobileColumn.removeEventListener("scroll", handleMobileScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="hidden md:block w-full h-screen relative">
        <div
          className="pl-20 absolute right-5 top-0 w-1/2 h-screen flex items-center justify-center"
          style={{ zIndex: 1 }}
        >
            <div className="relative w-[500px] h-[500px]">
            {/* Moveable bg-primary div */}
            <div
              className="absolute w-full h-full bg-(--color-primary) pointer-events-none"
              style={{
              top: 0,
              left: 0,
              transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
              transition: "transform 0.3s linear",
              }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full bg-(--color-accent1) overflow-hidden">
              <img
              src="/images/PortfolioImg.png"
              alt="Profile Picture"
              className="w-full h-full object-cover transition-all duration-300 ease-out"
              style={{ filter: `grayscale(${grayscaleValue}%)` }}
              />
            </div>
            </div>
        </div>

        {/* Scrollable */}
        <div
          ref={leftColumnRef}
          className="absolute left-10 top-0 w-1/2 h-screen overflow-y-scroll scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            zIndex: 10,
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="min-h-screen flex flex-col justify-center gap-5">
            <div className="text-4xl font-bold tracking-wider">
              <h1 className="text-9xl font-bold tracking-wider text-(--color-primary)">
                Nehan
              </h1>
              <h1 className="text-7xl font-bold mb-6 tracking-wider text-(--color-primary)">
                Wijayagunarathna
              </h1>
            </div>
            <div className="text-3xl font-semibold max-w-lg text-(--color-accent2) mb-10">
              <RoleType />
            </div>
            <div className="text-lg max-w-lg">
              An Information Technology undergraduate skilled in Devops
              engineering. Experienced in building user-focused applications
              through collaborative projects, with strong attention to detail
              and a focus on scalable solutions. Proven ability to contribute
              effectively in team settings.
            </div>
            <div>
              <a
                href="https://drive.google.com/drive/folders/18A-tg5YCdFeTAMxAyIPGn-FeYkGgYbKS?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 bg-(--color-accent1) text-(--color-foreground) font-semibold hover:bg-(--color-primary) hover:text-(--color-background) transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="min-h-screen flex items-center justify-center">
            <blockquote
              className="text-4xl font-bold text-(--color-foreground) italic border-l-3 pl-6"
              style={{ borderLeftColor: "var(--color-accent1)" }}
            >
              “Never forget what you are. The world will not. Wear it like
              armor”
              <p className="text-xl text-(--color-primary)">
                — Tyrion Lannister
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full h-screen relative overflow-hidden">
        <div
          className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none transition-opacity duration-500"
          style={{ opacity: imageOpacity }}
        >
          <div className="relative w-[500px] h-[500px] overflow-hidden">
            <img
              src="/images/PortfolioImg.png"
              alt="Profile Picture"
              className="w-full h-full object-cover transition-all duration-500 ease-out"
              style={{ filter: `grayscale(${grayscaleValue}%)` }}
            />
          </div>
        </div>

        {/* White Mist Overlay - Fades with scroll */}
        <div
          className="fixed inset-0 z-15 pointer-events-none transition-opacity duration-100"
          style={{
            opacity: grayscaleValue / 100,
            background:
              "linear-gradient(to top, var(--color-primary) -1000%, rgba(255, 255, 255, 0.1) 100%, transparent 100%)",
          }}
        />

        {/* Scrollable Content */}
        <div
          ref={mobileColumnRef}
          className="w-full h-screen overflow-y-scroll scroll-smooth relative"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Section 1 */}
          <div className="min-h-screen flex flex-col px-6 py-20 relative z-20 pointer-events-auto gap-5">
            <div className="mb-8">
              <h1 className="text-7xl font-bold tracking-wider text-(--color-primary) mb-2">
                Nehan
              </h1>
              <h1 className="text-5xl font-bold tracking-wider text-(--color-primary)">
                Wijayagunarathna
              </h1>
            </div>
            <div className="text-3xl font-semibold max-w-lg text-(--color-accent2) mb-10">
              <RoleType />
            </div>
            <div className=" flex flex-col gap-10">
              <p className="text-base mb-6">
                An Information Technology undergraduate skilled in Devops
                engineering. Experienced in building user-focused applications
                through collaborative projects, with strong attention to detail
                and a focus on scalable solutions. Proven ability to contribute
                effectively in team settings
              </p>
              <a
                href="https://drive.google.com/drive/folders/18A-tg5YCdFeTAMxAyIPGn-FeYkGgYbKS?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-1/2 px-6 py-3 bg-(--color-accent1) text-(--color-foreground) font-semibold active:bg-(--color-primary) active:text-(--color-background) transition-colors duration-300 text-center "
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Section 2 - Quote */}
          <div className="min-h-screen flex justify-center px-6 p-32 relative z-20 pointer-events-auto">
            <div className="flex flex-col gap-10 w-full">
              <blockquote className="text-4xl font-semibold text-(--color-foreground) italic text-center">
                “Never forget what you are. The world will not. Wear it like
                armor”
                <p className="text-2xl text-(--color-primary)">
                  — Tyrion Lannister
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
