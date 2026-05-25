import { motion } from "motion/react";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0_0)] via-background to-[oklch(0.06_0_0)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid mask-radial-fade opacity-25" />

      {/* Animated glow blobs */}
      <motion.div
        className="absolute top-[10%] left-[15%] size-[420px] rounded-full blur-[140px]"
        style={{ background: "oklch(0.82 0.2 155 / 0.06)" }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[10%] size-[460px] rounded-full blur-[160px]"
        style={{ background: "oklch(0.78 0.15 185 / 0.04)" }}
        animate={{
          x: [0, -80, 50, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[40%] size-[380px] rounded-full blur-[140px]"
        style={{ background: "oklch(0.88 0.22 130 / 0.035)" }}
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
