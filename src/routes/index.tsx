import { createFileRoute } from "@tanstack/react-router";
import { JerseyStore } from "@/features/store/JerseyStore";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit District | Premium Football Jerseys" },
      { name: "description", content: "Shop premium club, national, retro and custom football jerseys. Add your own name and number." },
      { property: "og:title", content: "Kit District | Premium Football Jerseys" },
      { property: "og:description", content: "Premium football jerseys, match-ready quality, made personal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <JerseyStore />;
}
