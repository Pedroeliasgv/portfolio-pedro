import { motion } from "framer-motion";
import {
  Cpu,
  Target,
  LineChart,
  Layers,
  Building2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const differentials = [
  {
    icon: Cpu,
    title: "Código com direção",
    text: "Desenvolvimento pensado para resolver problemas reais, não apenas entregar telas bonitas.",
  },
  {
    icon: Target,
    title: "Design que posiciona",
    text: "Interfaces com estética, clareza e intenção para aumentar percepção de valor.",
  },
  {
    icon: LineChart,
    title: "Visão de crescimento",
    text: "Cada projeto considera marca, conversão, comunicação e expansão.",
  },
  {
    icon: Layers,
    title: "Estrutura escalável",
    text: "Componentes, organização e tecnologia preparados para evoluir com o negócio.",
  },
];

const principles = ["Marca", "Produto", "Código", "Growth"];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-36 top-20 h-[430px] w-[430px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

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
              className="mt-5 font-serif text-4xl leading-[1.02] text-foreground md:text-6xl"
            >
              Desenvolvedor com mentalidade de{" "}
              <span className="italic text-gradient-gold">fundador.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
            >
              Meu trabalho fica entre tecnologia, design e estratégia. Construo
              experiências digitais que funcionam bem, comunicam valor e fazem
              uma marca parecer mais forte desde o primeiro contato.
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-card/70 p-1 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(40,140,120,0.22),transparent_36%),radial-gradient(circle_at_100%_100%,rgba(190,170,110,0.12),transparent_40%)]" />

              <div className="relative rounded-[1.7rem] border border-white/5 bg-background/35 p-6 md:p-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                      <Sparkles className="h-3.5 w-3.5" />
                      Pubird founder
                    </div>

                    <h3 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
                      A Pubird me faz desenvolver como quem entende negócio.
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      Como CEO & Co-Founder da Pubird, eu vivo a construção de
                      uma marca na prática: oferta, posicionamento, comunicação,
                      aquisição, conversão, experiência e tecnologia.
                    </p>

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      Por isso, quando desenvolvo um site, sistema ou interface,
                      eu não penso apenas no código. Penso no impacto que aquilo
                      precisa causar no usuário e no valor que precisa gerar para
                      o negócio.
                    </p>
                  </div>

                  <a
                    href="https://pubird.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    Ver Pubird
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-4">
                  {principles.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className="rounded-2xl border border-border bg-card/40 p-4 text-center"
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        0{index + 1}
                      </p>
                      <p className="mt-2 font-medium text-foreground">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {differentials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(circle_at_0%_0%,rgba(40,140,120,0.14),transparent_35%)]" />

                    <div className="relative">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <h3 className="font-medium text-foreground">{item.title}</h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 rounded-2xl border border-border bg-card/40 p-5"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  A diferença está na combinação: estética, performance,
                  posicionamento, tecnologia e objetivo comercial no mesmo
                  raciocínio.
                </p>

                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary">
                  <Building2 className="h-4 w-4" />
                  CEO & Builder
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
