import { motion } from "motion/react";
import {
  MapPin,
  Github,
  Linkedin,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";

const codeLines = [
  { prefix: "const", name: "leonardo", value: "{" },
  { prefix: "  role:", name: '"QA Engineer"', value: "," },
  { prefix: "  testing:", name: "['Cypress', 'Playwright', 'Postman']", value: "," },
  { prefix: "  stack:", name: "['React', '.NET', 'Node']", value: "," },
  { prefix: "  obsession:", name: '"clean code + automation"', value: "," },
  { prefix: "}", name: "", value: "" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-32 pb-20 px-6 sm:px-8 flex items-center"
    >
      <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left — copy */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-6"
          >
            <Badge
              variant="default"
              className="border-primary/40 bg-primary/10"
            >
              <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
              QA × Dev · Brazil
            </Badge>
            <Badge variant="outline">portfolio · 2026</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-balance"
          >
            Portfólio <br />
            <span className="text-gradient">
              {profile.name.split(" ")[0]}
            </span>{" "}
            <span className="relative inline-block">
              <span className="text-gradient">
                {profile.name.split(" ")[1]}
              </span>
              <motion.span
                aria-hidden
                className="absolute -right-3 top-2 sm:top-4 size-2 rounded-full bg-primary"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            QA Engineer com vivência em desenvolvimento full-stack. Experiência
            em suítes de teste, automação de APIs, execução de testes manuais e
            desenvolvimento de sistemas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button variant="glow" size="lg" asChild>
              <a href="#contato" className="flex gap-2 items-center">
                Contato
                <ArrowDown className="size-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#experiencia">Ver experiência</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <MapPin className="size-3.5 text-primary" />
              {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Github className="size-3.5" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin className="size-3.5" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right — terminal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-3 rounded-3xl opacity-50 blur-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-emerald-glow/20" />

          {/* Terminal */}
          <div className="relative glass rounded-2xl overflow-hidden shadow-[0_20px_80px_oklch(0_0_0/0.5)]">
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-secondary/40">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-destructive/70" />
                <span className="size-2.5 rounded-full bg-yellow-500/70" />
                <span className="size-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                ~/leonardo.config.ts
              </span>
              <Sparkles className="size-3.5 text-primary" />
            </div>

            {/* Code */}
            <div className="p-5 font-mono text-[13px] leading-relaxed">
              {codeLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.08, duration: 0.4 }}
                  className="flex gap-2"
                >
                  <span className="text-muted-foreground/40 select-none w-5 text-right">
                    {idx + 1}
                  </span>
                  <span>
                    <span className="text-accent">{line.prefix}</span>{" "}
                    <span className="text-primary">{line.name}</span>
                    <span className="text-muted-foreground">{line.value}</span>
                  </span>
                </motion.div>
              ))}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-primary ml-7 align-middle"
              />
            </div>

            {/* Footer stats */}
            <div className="grid grid-cols-3 border-t border-border/60 divide-x divide-border/60">
              {[
                { k: "+2", l: "anos em TI" },
                { k: "5", l: "stacks com experiência prática" },
                { k: "100%", l: "qualidade" },
              ].map((s) => (
                <div key={s.l} className="px-4 py-3 text-center">
                  <div className="font-display text-xl font-semibold text-gradient-cyan">
                    {s.k}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating chips */}
          <motion.div
            className="absolute -top-4 -right-4 sm:-right-6"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Badge
              variant="accent"
              className="shadow-[0_0_24px_oklch(0.78_0.15_185/0.3)]"
            >
              .ts · running
            </Badge>
          </motion.div>
          <motion.div
            className="absolute -bottom-3 -left-3"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Badge
              variant="emerald"
              className="shadow-[0_0_24px_oklch(0.88_0.22_130/0.25)]"
            >
              ✓ tests passing
            </Badge>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
