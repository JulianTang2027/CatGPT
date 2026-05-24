"use client";

import { useEffect, useRef, useState } from "react";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { Composer, type ComposerHandle } from "@/components/chat/Composer";
import { EmptyState } from "@/components/chat/EmptyState";
import { MessageList } from "@/components/chat/MessageList";
import { Sidebar } from "@/components/chat/Sidebar";
import type { Conversation, Message } from "@/lib/types";

const STARTER_HISTORY: Conversation[] = [
  { id: "h1", title: "Why do cats purr?", messages: [] },
  { id: "h2", title: "Best toys for indoor cats", messages: [] },
  { id: "h3", title: "How to introduce a new kitten", messages: [] },
  { id: "h4", title: "Recipe ideas (human food)", messages: [] },
];

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [conversations, setConversations] =
    useState<Conversation[]>(STARTER_HISTORY);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const composerRef = useRef<ComposerHandle>(null);

  const active = conversations.find((c) => c.id === activeId) ?? null;
  const messages = active?.messages ?? [];

  useEffect(() => {
    composerRef.current?.focus();
  }, [activeId]);

  function newChat() {
    setActiveId(null);
    setInput("");
    composerRef.current?.focus();
  }

  function send() {
    const text = input.trim();
    if (!text || isThinking) return;

    let convoId = activeId;
    if (!convoId) {
      const id = uid();
      const title = text.length > 40 ? text.slice(0, 40) + "…" : text;
      setConversations((prev) => [{ id, title, messages: [] }, ...prev]);
      setActiveId(id);
      convoId = id;
    }

    const targetId = convoId;
    const userMsg: Message = { id: uid(), role: "user", content: text };
    setConversations((prev) =>
      prev.map((c) =>
        c.id === targetId ? { ...c, messages: [...c.messages, userMsg] } : c,
      ),
    );
    setInput("");

    // TODO: call model and append an assistant message.
    // Toggle setIsThinking(true) while in flight, then push the reply.
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        conversations={conversations}
        activeId={activeId}
        onSelect={setActiveId}
        onNewChat={newChat}
      />

      <main className="relative flex min-h-0 min-w-0 flex-1 flex-col">
        <ChatHeader
          sidebarOpen={sidebarOpen}
          onOpenSidebar={() => setSidebarOpen(true)}
          onNewChat={newChat}
        />

        {messages.length === 0 ? (
          <div className="min-h-0 flex-1 overflow-y-auto">
            <EmptyState />
          </div>
        ) : (
          <MessageList messages={messages} isThinking={isThinking} />
        )}

        <Composer
          ref={composerRef}
          value={input}
          onChange={setInput}
          onSubmit={send}
          disabled={isThinking}
        />
      </main>
    </div>
  );
}
