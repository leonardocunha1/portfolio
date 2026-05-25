import { motion } from "motion/react";
import { Section } from "@/components/Section";
import { Bot, GitBranch, Search, Layers } from "lucide-react";
import { aboutParagraphs } from "@/data/profile";

const pillars = [
  {
    icon: Search,
    title: "Investigação",
    body: "Datadog, logs e queries SQL pra encontrar o root cause antes do bug virar incidente.",
  },
  {
    icon: Bot,
    title: "Automação com IA",
    body: "Agentes de IA gerando massa de dados e automatizando scripts — menos setup, mais cobertura.",
  },
  {
    icon: GitBranch,
    title: "Code Review",
    body: "Antecipo falhas arquiteturais e de lógica antes da entrega — qualidade desde o PR.",
  },
  {
    icon: Layers,
    title: "Full-stack",
    body: "React, .NET, Node, PostgreSQL. Entrego dashboards e plataformas, não só relatórios de bug.",
  },
];

export function About() {
  return (
    <Section
      id="sobre"
      eyebrow="// sobre"
      title={
        <>
          Da engenharia civil <br />
          ao <span className="text-gradient">Desenvolvimento de Software</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16">
        <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
          {aboutParagraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 self-start">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass glass-hover rounded-xl p-5 relative overflow-hidden group"
              >
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="size-9 grid place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 mb-3">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <h3 className="font-display text-sm font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
