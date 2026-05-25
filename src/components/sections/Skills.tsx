import { motion } from "motion/react";
import { Section } from "@/components/Section";
import { TestTube2, Code2, Database, Check } from "lucide-react";
import { skillCategories, type SkillCategory } from "@/data/profile";
import { cn } from "@/lib/utils";
import { getTechIcon } from "@/lib/tech-icons";

const accentMap: Record<
  SkillCategory["accent"],
  { ring: string; text: string; glow: string; icon: string; dot: string }
> = {
  primary: {
    ring: "border-primary/30",
    text: "text-primary",
    glow: "shadow-[0_0_40px_oklch(0.82_0.2_155/0.15)]",
    icon: "from-primary/30 to-primary/5",
    dot: "bg-primary",
  },
  accent: {
    ring: "border-accent/30",
    text: "text-accent",
    glow: "shadow-[0_0_40px_oklch(0.78_0.15_185/0.15)]",
    icon: "from-accent/30 to-accent/5",
    dot: "bg-accent",
  },
  emerald: {
    ring: "border-emerald-glow/30",
    text: "text-emerald-glow",
    glow: "shadow-[0_0_40px_oklch(0.88_0.22_130/0.15)]",
    icon: "from-emerald-glow/30 to-emerald-glow/5",
    dot: "bg-emerald-glow",
  },
};

const iconFor = (label: string) => {
  if (label.startsWith("Qualidade")) return TestTube2;
  if (label.startsWith("Desenvolvimento")) return Code2;
  return Database;
};

const levelLabel: Record<
  NonNullable<SkillCategory["skills"][number]["level"]>,
  string
> = {
  expert: "expert",
  advanced: "advanced",
  intermediate: "intermediate",
};

const levelBars: Record<
  NonNullable<SkillCategory["skills"][number]["level"]>,
  number
> = {
  expert: 3,
  advanced: 3,
  intermediate: 2,
};

const marqueeTech = [
  "Cypress",
  "Playwright",
  "Postman",
  "Datadog",
  ".NET",
  "Node.js",
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "PostgreSQL",
  "SQL Server",
  "Prisma",
  "Zephyr",
  "Jira",
  "SOLID",
  "DDD",
  "Clean Architecture",
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="// stack" title={<>Skills</>}>
      <div className="grid md:grid-cols-3 gap-5">
        {skillCategories.map((cat, idx) => {
          const a = accentMap[cat.accent];
          const Icon = iconFor(cat.label);
          return (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "glass glass-hover rounded-2xl p-6 relative group",
                a.glow,
              )}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className={cn(
                    "size-11 grid place-items-center rounded-xl border bg-gradient-to-br",
                    a.ring,
                    a.icon,
                  )}
                >
                  <Icon className={cn("size-5", a.text)} />
                </div>
                <span
                  className={cn(
                    "size-1.5 rounded-full animate-pulse-glow",
                    a.dot,
                  )}
                />
              </div>

              <h3 className="font-display text-lg font-semibold tracking-tight">
                {cat.label}
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {cat.description}
              </p>

              <ul className="mt-5 space-y-2">
                {cat.skills.map((s) => {
                  const TechIcon = getTechIcon(s.name);
                  return (
                  <li
                    key={s.name}
                    className="flex items-center justify-between py-2 px-3 rounded-lg bg-background/40 border border-border/60 hover:border-border transition-colors"
                  >
                    <span className="flex items-center gap-2.5 text-sm">
                      {TechIcon ? (
                        <TechIcon className={cn("size-4 shrink-0", a.text)} />
                      ) : (
                        <Check className={cn("size-3.5 shrink-0", a.text)} />
                      )}
                      {s.name}
                    </span>
                    {s.level && (
                      <span className="flex items-center gap-1">
                        {[1, 2, 3].map((b) => (
                          <span
                            key={b}
                            className={cn(
                              "w-1 h-3 rounded-full transition-colors",
                              b <= levelBars[s.level!] ? a.dot : "bg-border",
                            )}
                          />
                        ))}
                        <span className="ml-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                          {levelLabel[s.level]}
                        </span>
                      </span>
                    )}
                  </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Tech marquee */}
      <div className="mt-16 relative overflow-hidden border-y border-border/60 py-5 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-10 animate-scroll-x w-max">
          {[...marqueeTech, ...marqueeTech].map((t, i) => {
            const Icon = getTechIcon(t);
            return (
              <span
                key={i}
                className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-2.5 whitespace-nowrap"
              >
                {Icon ? (
                  <Icon className="size-4 text-primary/80 shrink-0" />
                ) : (
                  <span className="size-1 rounded-full bg-primary/60" />
                )}
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
