import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink, Folder } from "lucide-react";
import { Section } from "@/components/Section";
import { projects } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="// projetos"
      title={
        <>
          Projetos <span className="text-gradient">realizados.</span>
        </>
      }
      subtitle="Uma seleção de side projects, ferramentas internas e experimentos."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, idx) => {
          return (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "glass glass-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden group flex flex-col",
                p.featured && "md:col-span-2",
              )}
            >
              {/* Hover glow */}
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              </div>

              <div className="relative mb-4">
                <div className="size-11 grid place-items-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/15 to-accent/5">
                  <Folder className="size-5 text-primary" />
                </div>
              </div>

              <div className="relative flex-1">
                <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight">
                  {p.name}
                </h3>
                {p.tagline && (
                  <p className="mt-1 text-sm text-primary font-mono">
                    {p.tagline}
                  </p>
                )}
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                {p.metrics && p.metrics.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-lg font-semibold text-gradient-cyan">
                          {m.value}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-secondary/40 border border-border/60 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="size-3.5" />
                      código
                    </a>
                  )}
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="size-3.5" />
                      live
                    </a>
                  )}
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          + mais no{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            github
          </a>
        </p>
      </div>
    </Section>
  );
}
