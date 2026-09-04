import { siteConfig } from "@config/site";
import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const { name, description, lang, themeColor, backgroundColor } = siteConfig;

  const manifest = {
    name: name,
    short_name: name,
    description: description,
    lang: lang,

    start_url: "/",
    display: "standalone",
    theme_color: themeColor,
    background_color: backgroundColor,

    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      "Content-Type": "application/manifest+json; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=600",
    },
  });
};
