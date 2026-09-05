import { ImageResponse } from "next/og";

import { SITE } from "@/data/site";

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f6f7f9",
          color: "#20222a",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#76677f",
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Code · light · awareness
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "serif",
              fontSize: 94,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Harsh Sharma
          </div>
          <div
            style={{
              color: "#666b78",
              display: "flex",
              fontSize: 30,
              marginTop: 26,
            }}
          >
            Engineer · Photographer · Work in progress
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            borderTop: "1px solid #cdd1d9",
            display: "flex",
            fontSize: 18,
            justifyContent: "space-between",
            paddingTop: 28,
          }}
        >
          <span>harshsharma.info</span>
          <span>Bengaluru, India</span>
        </div>
      </div>
    ),
    size
  );
}
