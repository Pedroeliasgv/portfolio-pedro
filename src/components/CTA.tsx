import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "../data/projects";

export default function CTA() {
  return (
    <section id="contato" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-sm p-10 md:p-20 text-center"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <div className="relative">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              06 — Vamos conversar
            </span>
            <h2 className="font-serif text-5xl md:text-7xl mt-6 leading-[1.02] max-w-3xl mx-auto">
              Tem um{" "}
              <span className="italic text-gradient-gold">projeto</span> em
              mente?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Vamos transformar sua ideia em uma presença digital forte,
              funcional e estratégica.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:-translate-y-0.5 glow-primary"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
              Resposta em até 24h · Atendimento personalizado
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
