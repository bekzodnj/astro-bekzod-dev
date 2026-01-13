import type { ImageMetadata } from "astro";

export const project_thumbnails = import.meta.glob<{ default: ImageMetadata }>("../images/*.{jpg,png,webp,avif}", {
  eager: true,
});
