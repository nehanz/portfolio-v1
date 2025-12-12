import localFont from "next/font/local";
import "./globals.css";
import DesktopNavbar from "@/components/DesktopNavbar";

const formaDJR = localFont({
  src: [
    {
      path: "./fonts/FormaDJRMicro-Regular-Testing.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FormaDJRMicro-Medium-Testing.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-forma",
});

const neuePlak = localFont({
  src: [
    {
      path: "./fonts/Neue Plak Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Neue Plak Condensed Bold.ttf",
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
  return (
    <html lang="en" className={`${formaDJR.variable} ${neuePlak.variable}`}>
      <body className={`${formaDJR.className} overflow-hidden`}>
        <div className="relative h-screen overflow-hidden">
          <div className="absolute top-15 left-10 z-10">
            <DesktopNavbar />
          </div>
            <main className="flex-1 flex items-center justify-center bg-(--color-secondary) m-15 mb-10 p-10 h-screen">            
            <div>
              {children}
            </div>
            </main>
        </div>
      </body>
    </html>
  );
}
