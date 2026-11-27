import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NammaPros - Verified Home Services & Appliance Repair",
    short_name: "NammaPros",
    description:
      "Book verified home technicians across Chennai and Tamil Nadu with upfront pricing and 30-day warranty.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#800020",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
