import { SOCIAL } from "../data/projects";

type IconProps = {
  className?: string;
};

const InstagramIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M8 11v5" />
    <path d="M8 8v.01" />
    <path d="M12 16v-5" />
    <path d="M12 13a2.3 2.3 0 0 1 4.6 0v3" />
  </svg>
);

const TikTokIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 3v10.5a4.5 4.5 0 1 1-4.5-4.5" />
    <path d="M14 5c1.2 2.5 3.1 4 6 4" />
  </svg>
);

const GlobeIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M3 12h18" />
    <path d="M12 2c3 3 3 17 0 20" />
    <path d="M12 2c-3 3-3 17 0 20" />
  </svg>
);

const ArrowUpRightIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const links = [
  { label: "Instagram", href: SOCIAL.instagram, icon: InstagramIcon },
  { label: "LinkedIn", href: SOCIAL.linkedin, icon: LinkedinIcon },
  { label: "TikTok", href: SOCIAL.tiktok, icon: TikTokIcon },
  { label: "Pubird", href: SOCIAL.pubird, icon: GlobeIcon },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="font-serif text-4xl md:text-5xl text-foreground">
              Pedro<span className="text-primary">.</span>Elias
            </p>

            <p className="mt-3 text-muted-foreground">
              Desenvolvedor Full Stack & Estrategista Digital
            </p>
          </div>

          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Conecte-se
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between px-4 py-3 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-primary/40 transition-all"
                  >
                    <span className="flex items-center gap-3 text-foreground">
                      <Icon className="w-4 h-4 text-primary" />
                      {link.label}
                    </span>

                    <ArrowUpRightIcon className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Pedro Elias. Todos os direitos
            reservados.
          </p>

          <p className="uppercase tracking-[0.2em]">Crafted with intent · BR</p>
        </div>
      </div>
    </footer>
  );
}