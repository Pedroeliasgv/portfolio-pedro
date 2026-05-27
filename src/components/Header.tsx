import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "../data/projects";
import logo from "../assets/brand/pe-monogram.png";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/75 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-10">
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-card/60 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:border-primary/45 group-hover:bg-card">
            <img
              src={logo}
              alt="Logo Pedro Elias"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl tracking-tight text-foreground md:text-[28px]">
              Pedro Elias
            </span>

            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Portfolio
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            Falar comigo
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="rounded-xl border border-border bg-card/40 p-2 text-foreground transition-colors hover:bg-secondary/60 lg:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-3 text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Falar comigo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}