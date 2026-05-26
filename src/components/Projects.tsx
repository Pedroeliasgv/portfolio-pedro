import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Eye, X } from "lucide-react";
import { projects } from "../data/projects";

type Project = (typeof projects)[number];
type ProjectExtras = {
  image?: string;
  challenge?: string;
  solution?: string;
  result?: string;
};

const fallbackDetails = {
  challenge:
    "Transformar uma ideia ou presença digital em uma experiência mais clara, profissional e alinhada ao objetivo do projeto.",
  solution:
    "Construção de uma interface responsiva, moderna e estratégica, combinando design, tecnologia e percepção de valor.",
  result:
    "Um ativo digital com mais autoridade visual, melhor apresentação e mais força para apoiar vendas, conteúdo e relacionamento.",
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/12 blur-[150px]" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-primary"
            >
              02 — Projetos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-5 max-w-3xl font-serif text-4xl leading-[1.02] text-foreground md:text-6xl"
            >
              Cases que mostram {" "}
              <span className="italic text-gradient-gold">presença, código</span>{" "}
              e estratégia.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Uma seleção objetiva de projetos publicados. Cada trabalho aqui tem
            uma intenção: comunicar melhor, vender melhor ou fortalecer uma
            presença digital.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const extras = project as ProjectExtras;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-card/55 p-1 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:green-shadow"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_25%_0%,rgba(40,140,120,0.2),transparent_34%),radial-gradient(circle_at_100%_100%,rgba(190,170,110,0.12),transparent_36%)]" />

                <div className="relative flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-white/5 bg-background/40">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-secondary/50">
                    {extras.image ? (
                      <img
                        src={extras.image}
                        alt={`Prévia do projeto ${project.title}`}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_50%_0%,rgba(40,140,120,0.22),transparent_44%)]">
                        <span className="font-serif text-5xl text-foreground/80">
                          {project.title}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground backdrop-blur-md">
                      Case publicado
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="mb-7 flex items-start justify-between gap-5">
                      <div>
                        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-accent/90">
                          {project.category}
                        </p>

                        <h3 className="font-serif text-4xl leading-none text-foreground md:text-5xl">
                          {project.title}
                        </h3>
                      </div>

                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border bg-card/70 transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary">
                        <ArrowUpRight className="h-5 w-5 text-foreground transition-colors group-hover:text-primary-foreground" />
                      </div>
                    </div>

                    <p className="max-w-xl flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        href={project.link ?? "#"}
                        target={project.link ? "_blank" : undefined}
                        rel={project.link ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                      >
                        Ver projeto
                        <ExternalLink className="h-4 w-4" />
                      </a>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
                      >
                        <Eye className="h-4 w-4" />
                        Ver detalhes
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (() => {
          const extras = selectedProject as ProjectExtras;

          return (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                type="button"
                aria-label="Fechar detalhes"
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-background/85 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_40px_120px_rgba(0,0,0,0.58)]"
              >
                <div className="relative max-h-[90vh] overflow-y-auto">
                  <div className="relative aspect-[16/8] overflow-hidden border-b border-border bg-secondary/50">
                    {extras.image ? (
                      <img
                        src={extras.image}
                        alt={`Imagem do projeto ${selectedProject.title}`}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_50%_0%,rgba(40,140,120,0.26),transparent_45%)]">
                        <span className="font-serif text-6xl text-foreground/85">
                          {selectedProject.title}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />

                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-background/70 text-muted-foreground backdrop-blur-md transition hover:border-primary/50 hover:text-foreground"
                      aria-label="Fechar"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="mb-3 text-xs uppercase tracking-[0.28em] text-primary">
                        Detalhes do projeto
                      </p>

                      <h3 className="font-serif text-4xl leading-none text-foreground md:text-6xl">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 md:p-9">
                    <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {selectedProject.description}
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                      {[
                        ["Desafio", extras.challenge ?? fallbackDetails.challenge],
                        ["Solução", extras.solution ?? fallbackDetails.solution],
                        ["Resultado", extras.result ?? fallbackDetails.result],
                      ].map(([label, text]) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-border bg-background/35 p-5"
                        >
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                            {label}
                          </p>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {selectedProject.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                        >
                          Abrir projeto
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedProject(null)}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
                      >
                        Fechar
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
