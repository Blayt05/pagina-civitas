import type { MetadataRoute } from "next";
import { sitio } from "@/content/sitio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: sitio.url, changeFrequency: "monthly", priority: 1 },
    { url: `${sitio.url}/evangelio`, changeFrequency: "yearly", priority: 0.8 },
  ];
}
