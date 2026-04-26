import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Culinair AnnoNu",
    short_name: "Culinair AnnoNu",
    description:
      "De culinaire regisseur voor merken — high-end brand events Nederland.",
    start_url: "/",
    display: "standalone",
    background_color: "#0E0E0E",
    theme_color: "#0E0E0E",
    icons: [
      { src: "/icon.png", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      {
        src: "/images/logo-gold.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
