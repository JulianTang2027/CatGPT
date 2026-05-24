import { CatMark } from "@/components/icons";

export function Thinking() {
  return (
    <div className="mb-6 flex gap-3 animate-in fade-in duration-200">
      <div className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-border bg-card">
        <CatMark className="size-4" />
      </div>
      <div className="flex items-center gap-1 pt-2.5">
        <span className="size-1.5 animate-bounce rounded-full bg-foreground/40 [animation-delay:-0.3s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-foreground/40 [animation-delay:-0.15s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-foreground/40" />
      </div>
    </div>
  );
}
