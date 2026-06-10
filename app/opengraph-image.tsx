import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.shortName} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// A restrained, white OG card — name + statement + a hairline accent.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 6,
            color: "#666666",
            textTransform: "uppercase",
          }}
        >
          Software · AI · Security
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 600,
              color: "#111111",
              letterSpacing: -2,
              lineHeight: 1.02,
            }}
          >
            Naveed Ahmed Syed
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#666666",
              marginTop: 28,
              maxWidth: 860,
              lineHeight: 1.4,
            }}
          >
            Building intelligent, secure systems — AI, machine learning, computer
            vision, and application security.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 44, height: 4, background: "#111111" }} />
          <div
            style={{
              fontSize: 18,
              color: "#666666",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Engineering · Research Lab
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
