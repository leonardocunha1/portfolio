import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="grid place-items-center size-7 rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground text-[10px] font-bold">
            LC
          </span>
          <span>
            {profile.name} · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
