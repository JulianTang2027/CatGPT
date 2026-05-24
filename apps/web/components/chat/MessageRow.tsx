import { CatMark } from "@/components/icons";
import type { Message } from "@/lib/types";

interface MessageRowProps {
  message: Message;
}

export function MessageRow({ message }: MessageRowProps) {
  if (message.role === "user") {
    return (
      <div className="mb-6 flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="max-w-[80%] whitespace-pre-wrap rounded-3xl bg-muted px-4 py-2.5 text-[15px] leading-relaxed">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-border bg-card">
        <CatMark className="size-4" />
      </div>
      <div className="flex-1 whitespace-pre-wrap pt-0.5 text-[15px] leading-relaxed">
        {message.content}
      </div>
    </div>
  );
}
