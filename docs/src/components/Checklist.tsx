import * as React from 'react';
import { CheckCircle } from 'lucide-react';

export function Checklist({ items }: { items: string[] }) {
  return (
    <div className="my-6 flex flex-col gap-3">
      {items.map((item, idx) => (
        <div 
          key={idx} 
          className="flex items-center gap-4 p-4 rounded-xl border border-green-200 dark:border-green-900/30 bg-green-50/50 dark:bg-gray-900/40 hover:bg-green-50 dark:hover:bg-gray-900/80 hover:border-green-300 dark:hover:border-green-800 hover:shadow-sm transition-all"
        >
          <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 shrink-0" />
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}
