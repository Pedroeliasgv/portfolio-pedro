import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const points = [
  "Desenvolvimento full stack",
  "Interfaces claras e responsivas",
  "Estratégia aplicada ao digital",
  "Projetos com visão de negócio",
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-primary"
            >
              01 — Sobre
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-5 max-w-md font-serif text-4xl leading-[1.05] text-foreground md:text-6xl"
            >
              Tecnologia com{" "}
              <span className="italic text-gradient-gold">intenção.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground"
            >
              Meu foco é criar soluções digitais que sejam bonitas, funcionais e
              úteis para o momento real de cada projeto.
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl border border-border bg-card/35 p-6 md:p-8"
            >
              <div className="absolute left-0 top-8 h-20 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />

              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Sou desenvolvedor full stack e trabalho na construção de sites,
                interfaces e sistemas digitais com foco em clareza, performance
                e boa experiência.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Também estou à frente da{" "}
                <span className="text-foreground">Pubird</span>, uma agência que
                une marketing, tecnologia e growth. Essa vivência me ajuda a
                olhar para cada projeto com mais contexto: não só pelo código,
                mas também pela marca, pelo posicionamento e pelo objetivo do
                negócio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 grid gap-3 sm:grid-cols-2"
            >
              {points.map((point, index) => (
                <div
                  key={point}
                  className="group rounded-2xl border border-border bg-card/30 px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:bg-card/55"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      {point}
                    </p>

                    <span className="text-xs tabular-nums text-primary/70">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                A diferença está em unir execução técnica com percepção de valor.
              </p>

              <a
                href="https://pubird.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-foreground"
              >
                Conhecer a Pubird
                <span className="h-px w-8 bg-primary/60 transition-all group-hover:w-12 group-hover:bg-primary" />
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}