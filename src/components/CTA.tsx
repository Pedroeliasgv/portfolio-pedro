import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data/projects";

export default function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.2rem] border border-border bg-card/60 p-8 text-center backdrop-blur-xl md:p-16 lg:p-20"
        >
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]" />
          <div className="absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <div className="relative mx-auto max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              06 — Próximo projeto
            </span>

            <h2 className="mt-6 font-serif text-5xl leading-[1.02] md:text-7xl">
              Vamos transformar uma boa ideia em uma {" "}
              <span className="italic text-gradient-gold">presença digital forte</span>?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Me chama com o contexto do projeto. Eu te ajudo a entender o que
              faz sentido construir primeiro, com estética, tecnologia e
              estratégia no mesmo fluxo.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 glow-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#projetos"
                className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-background/35 px-7 py-4 font-medium text-foreground transition-all hover:border-primary/50 hover:bg-secondary/60"
              >
                Rever projetos
                <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground/75 sm:grid-cols-3">
              <span>Diagnóstico</span>
              <span>Estratégia</span>
              <span>Deploy</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
