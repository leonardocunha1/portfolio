import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightboxProps {
  images: string[];
  index: number;
  alt?: string;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}

export function Lightbox({
  images,
  index,
  alt,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const total = images.length;
  const hasMany = total > 1;

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + total) % total);
  }, [index, total, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % total);
  }, [index, total, onIndexChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasMany && e.key === "ArrowLeft") goPrev();
      if (hasMany && e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, goPrev, goNext, hasMany]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={alt ?? "Galeria do projeto"}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 grid size-10 place-items-center rounded-full border border-border/60 bg-background/70 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
        >
          <X className="size-5" />
        </button>

        {hasMany && (
          <div className="absolute top-5 left-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {index + 1} / {total}
          </div>
        )}

        {hasMany && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Imagem anterior"
            className="absolute left-2 sm:left-5 grid size-10 sm:size-12 place-items-center rounded-full border border-border/60 bg-background/70 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </button>
        )}

        {hasMany && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Próxima imagem"
            className="absolute right-2 sm:right-5 grid size-10 sm:size-12 place-items-center rounded-full border border-border/60 bg-background/70 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>
        )}

        <motion.img
          key={images[index]}
          src={images[index]}
          alt={alt ?? `Imagem ${index + 1}`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] max-w-[92vw] sm:max-w-[88vw] rounded-xl border border-border/60 shadow-2xl object-contain"
        />

        {hasMany && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-2 rounded-full bg-background/70 border border-border/60 backdrop-blur"
          >
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => onIndexChange(i)}
                aria-label={`Ir para imagem ${i + 1}`}
                className={cn(
                  "size-2 rounded-full transition-all",
                  i === index
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground/70",
                )}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
