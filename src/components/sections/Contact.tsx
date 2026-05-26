import { motion } from "motion/react";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { profile } from "@/data/profile";

const channels = [
  {
    icon: Mail,
    label: "Email pessoal",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/55${profile.phone.replace(/\D/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/leonardo-cunha",
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@leonardocunha1",
    href: profile.github,
  },
];

export function Contact() {
  return (
    <Section id="contato" eyebrow="// contato" className="pb-20">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-emerald-glow/10" />
        <div className="absolute inset-0 bg-grid-sm opacity-30 mask-radial-fade" />
        <div className="absolute inset-0 ring-1 ring-inset ring-border/60 rounded-3xl pointer-events-none" />

        <div className="relative p-4 sm:p-8 lg:p-10 grid sm:grid-cols-2 gap-3 sm:gap-4">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group min-w-0 flex items-center gap-3 sm:gap-4 p-3 sm:p-5 rounded-xl border border-border/60 bg-background/40 hover:border-primary/50 hover:bg-background/70 transition-all"
              >
                <div className="size-10 sm:size-11 shrink-0 grid place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 group-hover:scale-110 transition-transform">
                  <Icon className="size-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="text-[13px] sm:text-sm font-medium truncate">
                    {c.value}
                  </div>
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
