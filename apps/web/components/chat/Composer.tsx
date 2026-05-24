"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import type { KeyboardEvent } from "react";
import { ArrowUpIcon, PlusIcon } from "@/components/icons";

interface ComposerProps {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
}

export interface ComposerHandle {
  focus: () => void;
}

export const Composer = forwardRef<ComposerHandle, ComposerProps>(
  function Composer({ value, onChange, onSubmit, disabled = false }, ref) {
    const taRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => taRef.current?.focus(),
    }));

    useEffect(() => {
      const el = taRef.current;
      if (!el) return;
      el.style.height = "auto";
      el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
    }, [value]);

    function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        onSubmit();
      }
    }

    return (
      <div className="border-t border-border/60 bg-background">
        <div className="mx-auto w-full max-w-3xl px-4 py-3">
          <div className="flex items-end gap-2 rounded-3xl border border-border bg-card px-4 py-2.5 shadow-sm transition-colors focus-within:border-foreground/30">
            <button
              type="button"
              aria-label="Attach"
              className="mb-1.5 grid size-7 shrink-0 place-items-center rounded-full text-foreground/50 hover:bg-muted hover:text-foreground"
            >
              <PlusIcon className="size-4" />
            </button>
            <textarea
              ref={taRef}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              placeholder="Message CatGPT…"
              className="max-h-[200px] flex-1 resize-none bg-transparent py-1.5 text-[15px] leading-6 outline-none placeholder:text-foreground/40"
            />
            <button
              type="button"
              onClick={onSubmit}
              disabled={disabled || !value.trim()}
              aria-label="Send"
              className="mb-1 grid size-8 shrink-0 place-items-center rounded-full bg-foreground text-background transition-opacity disabled:opacity-30"
            >
              <ArrowUpIcon className="size-4" />
            </button>
          </div>
          <p className="mt-2 text-center text-[11px] text-foreground/40">
            CatGPT may produce inaccurate purrs. Verify with a real cat.
          </p>
        </div>
      </div>
    );
  },
);
