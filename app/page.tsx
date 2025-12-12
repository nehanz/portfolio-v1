"use client";
import { useEffect, useRef, useState } from "react";
import "./globals.css";

export default function Home() {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const [grayscaleValue, setGrayscaleValue] = useState(0);

  useEffect(() => {
    // Scroll to bottom on initial load
    if (leftColumnRef.current) {
      leftColumnRef.current.scrollTop = leftColumnRef.current.scrollHeight;
    }

    // Handle scroll to update grayscale
    const handleScroll = () => {
      if (leftColumnRef.current) {
        const scrollTop = leftColumnRef.current.scrollTop;
        const scrollHeight =
          leftColumnRef.current.scrollHeight -
          leftColumnRef.current.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        // Invert: 0% scrolled (top) = 100% grayscale, 100% scrolled (bottom) = 0% grayscale
        const grayscale = scrollPercentage;
        setGrayscaleValue(Math.max(0, Math.min(100, grayscale)));
      }
    };

    const leftColumn = leftColumnRef.current;
    if (leftColumn) {
      leftColumn.addEventListener("scroll", handleScroll);
      return () => leftColumn.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="w-full h-screen flex gap-20 px-10">
      {/* Left Column - Scrollable */}
      <div
        ref={leftColumnRef}
        className="flex-1 h-screen overflow-y-scroll scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Section 1 - Top (First Screen Content) */}
        <div
          className="min-h-screen flex flex-col justify-center gap-8"
          style={{ position: "relative", zIndex: 50 }}
        >
          <div>
            <h1 className="text-9xl font-bold tracking-wider text-(--color-primary)">
              Nehan
            </h1>
            <h1 className="text-7xl font-bold mb-6 tracking-wider text-(--color-primary)">
              Wijayagunarathna
            </h1>
          </div>
          <div>
            <p className="text-lg mb-4">
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
              className="inline-block mt-6 px-6 py-3 bg-(--color-accent) text-(--color-foreground) font-semibold hover:bg-(--color-primary) hover:text-(--color-background) transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Section 2 - Bottom (Second Screen Content - Quote) */}
        <div className="min-h-screen flex items-center justify-center">
          <blockquote className="text-4xl font-bold text-(--color-foreground) italic">
            "Building the future, one line of code at a time."
          </blockquote>
        </div>
      </div>

      {/* Right Column - Fixed Image */}
      <div className="flex-1 h-screen flex items-center justify-center sticky top-0">
        <div className="relative w-[500px] h-[500px]">
          <div className="absolute top-2 left-2 w-full h-full bg-(--color-primary)"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-(--color-accent) overflow-hidden">
            <img
              src="/images/PortfolioImg.png"
              alt="Profile Picture"
              className="w-full h-full object-cover transition-all duration-300 ease-out"
              style={{ filter: `grayscale(${grayscaleValue}%)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
