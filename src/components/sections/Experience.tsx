import { motion } from "motion/react";
import { Section } from "@/components/Section";
import { GraduationCap, Briefcase } from "lucide-react";
import { experiences, education } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="// timeline"
      title={
        <>
          Da obra ao código, <span className="text-gradient">passo a passo.</span>
        </>
      }
      subtitle="Quase dois anos construindo software com qualidade no DNA — e crescendo dentro do mesmo time."
    >
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-accent/40 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Node */}
              <div className="absolute left-0 top-1.5 flex items-center justify-center">
                <span
                  className={cn(
                    "relative grid place-items-center size-8 rounded-full border-2",
                    exp.current
                      ? "border-primary bg-primary/15 shadow-[0_0_18px_oklch(0.82_0.2_155/0.5)]"
                      : "border-border bg-background"
                  )}
                >
                  <Briefcase
                    className={cn(
                      "size-3.5",
                      exp.current ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                  {exp.current && (
                    <motion.span
                      className="absolute inset-0 rounded-full border-2 border-primary"
                      animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                </span>
              </div>

              <div className="glass glass-hover rounded-xl p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-0.5">{exp.company}</p>
                  </div>
                  <span
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-md border",
                      exp.current
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border bg-secondary/40 text-muted-foreground"
                    )}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-2 size-1 rounded-full bg-primary/60 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            // formação
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((ed, i) => (
            <motion.div
              key={ed.school}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass glass-hover rounded-xl p-5 flex items-start gap-4"
            >
              <div className="size-10 grid place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 shrink-0">
                <GraduationCap className="size-4 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold tracking-tight">{ed.school}</h4>
                <p className="text-sm text-muted-foreground mt-0.5">{ed.degree}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 mt-2">
                  {ed.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
