"use client";

import { useEffect, useRef } from "react";
import { MessageRow } from "./MessageRow";
import { Thinking } from "./Thinking";
import type { Message } from "@/lib/types";

interface MessageListProps {
  messages: Message[];
  isThinking: boolean;
}

export function MessageList({ messages, isThinking }: MessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages.length, isThinking]);

  return (
    <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto">
      <div className="mx-auto max-w-3xl px-4 pt-4 pb-6">
        {messages.map((m) => (
          <MessageRow key={m.id} message={m} />
        ))}
        {isThinking && <Thinking />}
      </div>
    </div>
  );
}
