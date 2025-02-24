import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Side-by-side pages" },
    { name: "description", content: "Compare prisjakt and pricerunner!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
