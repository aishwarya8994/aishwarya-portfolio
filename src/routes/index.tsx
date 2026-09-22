import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aishwarya More — Senior UI/UX & Product Designer" },
      { name: "description", content: "Portfolio of Aishwarya More, a Senior UI/UX and Product Designer creating clear, scalable web and mobile experiences." },
      { property: "og:title", content: "Aishwarya More — Senior UI/UX & Product Designer" },
      { property: "og:description", content: "Selected product design, UI/UX, design systems and responsive web and mobile work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
