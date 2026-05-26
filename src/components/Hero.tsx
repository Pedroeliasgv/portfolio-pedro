import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Code2, Layers3 } from "lucide-react";
import portrait from "../assets/pedro-portrait.jpg";
import { WHATSAPP_URL } from "../data/projects";

const stats = [
  { value: "Full Stack", label: "Desenvolvimento moderno" },
  { value: "CEO", label: "Visão de negócio aplicada" },
  { value: "Growth", label: "Marketing + tecnologia" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-32 md:pt-40"
    >
      <div className="absolute inset-0 grid-bg opacity-35 [mask-image:radial-gradient(ellipse_at_center,black,transparent_74%)]" />
      <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-primary/18 blur-[140px]" />
      <div className="absolute -right-24 bottom-20 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Full Stack • Founder • Digital Strategy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="max-w-5xl font-serif text-[clamp(4rem,10vw,9.5rem)] leading-[0.82] tracking-[-0.07em] text-foreground"
          >
            Código com visão de{" "}
            <span className="italic text-gradient-gold">marca.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-8 max-w-2xl border-l border-primary/40 pl-5"
          >
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Sou <span className="text-foreground">Pedro Elias</span>,
              desenvolvedor full stack e estrategista digital. Construo sites,
              sistemas e experiências digitais que unem estética, performance,
              posicionamento e crescimento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 glow-primary"
            >
              Ver projetos
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/45 px-7 py-4 font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-card"
            >
              Falar comigo
              <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42 }}
            className="mt-14 grid max-w-3xl gap-3 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-border bg-card/35 p-4 backdrop-blur-md"
              >
                <p className="font-serif text-2xl text-foreground">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-primary/20 rotate-3" />
            <div className="absolute -inset-2 rounded-[2rem] border border-border -rotate-2" />

            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_40px_120px_-55px_rgba(0,0,0,0.9)]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={portrait}
                  alt="Pedro Elias — Desenvolvedor Full Stack"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 mix-blend-overlay" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-background/70 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-primary">
                      Disponível
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      Para sites, sistemas e produtos digitais
                    </p>
                  </div>

                  <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                    <Code2 className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-8 rounded-2xl border border-border bg-card/90 p-4 backdrop-blur-xl md:-right-10">
              <Layers3 className="mb-2 h-5 w-5 text-accent" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Brand + Tech
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
