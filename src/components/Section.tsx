import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, eyebrow, title, subtitle, children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("relative py-16 sm:py-20 px-6 sm:px-8", className)}
        {...props}
      >
        <div className="mx-auto max-w-6xl">
          {(eyebrow || title || subtitle) && (
            <motion.header
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 sm:mb-14 max-w-2xl"
            >
              {eyebrow && (
                <div className="mb-4 flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse-glow" />
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                    {eyebrow}
                  </span>
                </div>
              )}
              {title && (
                <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {subtitle}
                </p>
              )}
            </motion.header>
          )}
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";
