import { motion } from "framer-motion";

const groups = [
  {
    label: "Frontend",
    description: "interfaces, experiência e performance visual",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vite"],
  },
  {
    label: "Backend",
    description: "dados, autenticação, APIs e estrutura de produto",
    items: ["Node.js", "Supabase", "PostgreSQL", "ASP.NET Core", "SQL"],
  },
  {
    label: "Ferramentas",
    description: "deploy, versionamento, prototipação e operação",
    items: ["Git", "GitHub", "Vercel", "Docker", "Figma"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-24 h-[320px] w-[320px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            04 — Stack
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-6xl">
            Ferramentas que uso para construir com {" "}
            <span className="italic text-gradient-gold">clareza</span>.
          </h2>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-border bg-card/45 backdrop-blur-xl">
          {groups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="grid gap-6 border-b border-border p-6 last:border-b-0 md:grid-cols-12 md:p-8"
            >
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.24em] text-primary">
                  0{groupIndex + 1}
                </p>
                <h3 className="mt-3 font-serif text-4xl text-foreground">
                  {group.label}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
              </div>

              <div className="md:col-span-8 flex flex-wrap items-center gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background/35 px-4 py-2.5 text-sm text-foreground transition-all hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
