import { ChevronIcon, PencilIcon, SidebarIcon } from "@/components/icons";

interface ChatHeaderProps {
  sidebarOpen: boolean;
  onNewChat: () => void;
  onOpenSidebar: () => void;
}

export function ChatHeader({
  sidebarOpen,
  onNewChat,
  onOpenSidebar,
}: ChatHeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2">
        {!sidebarOpen && (
          <button
            type="button"
            aria-label="Open sidebar"
            className="rounded-md p-1.5 text-foreground/60 hover:bg-muted hover:text-foreground"
            onClick={onOpenSidebar}
          >
            <SidebarIcon className="size-4" />
          </button>
        )}
        <div className="flex items-center gap-1.5 text-sm font-medium">
          CatGPT
          <ChevronIcon className="size-3.5 text-foreground/40" />
        </div>
      </div>
      <button
        type="button"
        aria-label="New chat"
        className="rounded-md p-1.5 text-foreground/60 hover:bg-muted hover:text-foreground"
        onClick={onNewChat}
      >
        <PencilIcon className="size-4" />
      </button>
    </header>
  );
}
