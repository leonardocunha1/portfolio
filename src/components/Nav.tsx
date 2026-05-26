import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 sm:px-8 transition-all duration-500",
          scrolled && "rounded-2xl",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            scrolled &&
              "glass rounded-2xl px-4 py-2.5 shadow-[0_8px_32px_oklch(0.05_0_0/0.4)]",
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2 font-mono text-sm font-semibold tracking-wide group"
          >
            <span className="relative grid place-items-center size-8 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_0_18px_oklch(0.82_0.2_155/0.4)] transition-transform group-hover:scale-110">
              LC
              <span className="absolute inset-0 rounded-lg ring-1 ring-white/20" />
            </span>
            <span className="hidden sm:inline text-foreground/90">
              leonardo<span className="text-primary">.dev</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute inset-x-3 bottom-1 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            <a
              href="#contato"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all"
            >
              <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
              Contato
            </a>
          </nav>

          <button
            type="button"
            aria-label="Abrir menu"
            className="md:hidden grid place-items-center size-10 rounded-lg border border-border bg-secondary/40"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 rounded-2xl p-3 flex flex-col bg-card border border-border/60 shadow-[0_12px_40px_oklch(0.05_0_0/0.6)]"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm hover:bg-secondary/40 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
