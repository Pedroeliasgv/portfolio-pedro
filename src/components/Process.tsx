import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Diagnóstico", text: "Entendimento do objetivo, público e necessidade do projeto." },
  { n: "02", title: "Estratégia", text: "Definição de estrutura, experiência e direção visual." },
  { n: "03", title: "Desenvolvimento", text: "Construção do site ou sistema com código limpo e responsivo." },
  { n: "04", title: "Entrega", text: "Deploy, ajustes finais e orientação para uso." },
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            05 — Processo
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 leading-[1.05]">
            Como eu <span className="italic text-gradient-gold">trabalho</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl border border-border bg-card/40 hover:bg-card hover:border-primary/40 transition-all duration-500 group"
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif text-5xl text-primary/30 group-hover:text-primary transition-colors">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="font-serif text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
