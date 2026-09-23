import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";

export const alt = "Nehan Wijayagunarathna - Full-Stack Developer & DevOps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "#0a0a0a",
          padding: "64px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background radial accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 60%)",
            display: "flex",
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #e8e8e8 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Main name — split into two separate divs to avoid <br /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              display: "flex",
            }}
          >
            Nehan
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              display: "flex",
            }}
          >
            Wijayagunarathna
          </div>
        </div>

        {/* Role tags */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            marginBottom: "36px",
          }}
        >
          {["Full-Stack Developer", "DevOps"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "6px 16px",
                color: "rgba(255,255,255,0.75)",
                fontSize: "15px",
                letterSpacing: "0.03em",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.3)",
            fontSize: "16px",
            letterSpacing: "0.08em",
          }}
        >
          {siteConfig.url}
        </div>
      </div>
    ),
    { ...size }
  );
}
