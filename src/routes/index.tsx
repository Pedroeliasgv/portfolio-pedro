import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Stack } from "@/components/Stack";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pedro Elias — Desenvolvedor Full Stack & Estrategista Digital" },
      {
        name: "description",
        content:
          "Portfólio de Pedro Elias. Desenvolvimento full stack, sistemas web, SaaS e estratégia digital para marcas que querem autoridade e resultado.",
      },
      { property: "og:title", content: "Pedro Elias — Full Stack & Estrategista Digital" },
      {
        property: "og:description",
        content:
          "Crio interfaces, sistemas e experiências digitais com alto valor percebido.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Stack />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
