import { CatMark, PlusIcon, SidebarIcon } from "@/components/icons";
import type { Conversation } from "@/lib/types";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onNewChat: () => void;
}

export function Sidebar({
  open,
  onClose,
  conversations,
  activeId,
  onSelect,
  onNewChat,
}: SidebarProps) {
  return (
    <aside
      className={`${open ? "w-64" : "w-0"} shrink-0 overflow-hidden border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-300 ease-out`}
    >
      <div className="flex h-full w-64 flex-col">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <CatMark className="size-6" />
            <span className="text-sm font-medium tracking-tight">CatGPT</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Collapse sidebar"
            className="rounded-md p-1.5 text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground"
          >
            <SidebarIcon className="size-4" />
          </button>
        </div>

        <div className="px-3 pb-2">
          <button
            type="button"
            onClick={onNewChat}
            className="flex w-full items-center justify-between rounded-lg border border-sidebar-border bg-sidebar px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <span className="flex items-center gap-2">
              <PlusIcon className="size-4" />
              New chat
            </span>
          </button>
        </div>

        <div className="px-3 pt-3 pb-1 text-[11px] uppercase tracking-wider text-sidebar-foreground/40">
          Recent
        </div>
        <nav className="flex-1 overflow-y-auto px-2 pb-3">
          {conversations.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => onSelect(c.id)}
              className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
                c.id === activeId
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60"
              }`}
            >
              <span className="truncate">{c.title}</span>
            </button>
          ))}
        </nav>

        <div className="border-t border-sidebar-border p-3">
          <div className="flex items-center gap-2 rounded-md px-2 py-1.5">
            <div className="grid size-7 place-items-center rounded-full bg-sidebar-accent text-xs font-medium text-sidebar-accent-foreground">
              J
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm">You</span>
              <span className="text-[11px] text-sidebar-foreground/50">
                Free plan
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
