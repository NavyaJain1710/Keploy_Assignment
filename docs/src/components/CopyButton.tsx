'use client';

import * as React from 'react';
import { Check, Copy } from 'lucide-react';

export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (hasCopied) {
      timeout = setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [hasCopied]);

  return (
    <button
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors z-10 ${className || ''}`}
      onClick={() => {
        navigator.clipboard.writeText(text);
        setHasCopied(true);
      }}
      aria-label="Copy code"
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <Check className="h-4 w-4 text-green-400" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );
}
