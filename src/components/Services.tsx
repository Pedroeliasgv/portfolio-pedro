import { motion } from "framer-motion";
import {
  Boxes,
  Code2,
  DatabaseZap,
  Globe2,
  LayoutTemplate,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    label: "Conversão",
    text: "Páginas rápidas, modernas e pensadas para transformar atenção em ação.",
  },
  {
    icon: Globe2,
    title: "Sites Institucionais",
    label: "Presença",
    text: "Sites profissionais para marcas que precisam comunicar autoridade no digital.",
  },
  {
    icon: Code2,
    title: "Sistemas Web",
    label: "Operação",
    text: "Interfaces e plataformas sob medida para organizar processos e rotinas.",
  },
  {
    icon: Boxes,
    title: "SaaS / MVP",
    label: "Produto",
    text: "Primeiras versões de produtos digitais com estrutura limpa e escalável.",
  },
  {
    icon: Workflow,
    title: "Integrações",
    label: "Automação",
    text: "Conexões com APIs, CRM, pagamentos, Supabase e fluxos inteligentes.",
  },
  {
    icon: DatabaseZap,
    title: "Estrutura Técnica",
    label: "Base",
    text: "Organização de front-end, dados, deploy e arquitetura para evoluir com segurança.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              03 — Serviços
            </span>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] md:text-6xl">
              Soluções digitais para quem quer sair do {" "}
              <span className="italic text-gradient-gold">improviso</span>.
            </h2>
          </div>

          <p className="md:col-span-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Do primeiro contato ao deploy, a entrega precisa ter estética,
            estratégia e estrutura técnica funcionando juntas.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/45 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/45 hover:bg-card/70"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_0%_0%,rgba(40,140,120,0.16),transparent_40%)]" />

                <div className="relative">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full border border-border bg-background/35 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {service.label}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl leading-none text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

                  <p className="mt-5 text-xs uppercase tracking-[0.22em] text-primary/80">
                    0{index + 1} / Capability
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
