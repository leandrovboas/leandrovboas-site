import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#111827",
          color: "#F3F4F6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <div style={{ width: 44, height: 2, background: "#2DD4BF" }} />
          <div style={{ fontSize: 22, color: "#9CA3AF", letterSpacing: 2, textTransform: "uppercase" }}>
            {t("eyebrow")}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, lineHeight: 1, letterSpacing: -2 }}>
          Leandro Vilas Boas
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 34, color: "#2DD4BF", fontWeight: 600 }}>
          {t("roleLine1")} {t("roleLine2")}
        </div>
      </div>
    ),
    { ...size }
  );
}
