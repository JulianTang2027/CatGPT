import { CatMark } from "@/components/icons";

export function EmptyState() {
  return (
    <div className="mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-4 py-12 animate-in fade-in duration-500">
      <div className="mb-6 flex items-center gap-3">
        <CatMark className="size-10" />
        <h1 className="text-3xl font-semibold tracking-tight">CatGPT</h1>
      </div>
      <p className="mb-8 text-sm text-foreground/50">
        How can I help you today?
      </p>
    </div>
  );
}
