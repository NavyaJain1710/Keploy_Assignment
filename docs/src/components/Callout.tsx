import React from 'react';
import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'aha';
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/50 text-blue-900 dark:text-blue-100',
    warning: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800/50 text-amber-900 dark:text-amber-100',
    success: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800/50 text-emerald-900 dark:text-emerald-100',
    aha: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800/50 text-purple-900 dark:text-purple-100',
  };

  const icons = {
    info: <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    success: <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    aha: <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
  };

  const defaultTitles = {
    info: 'Information',
    warning: 'Warning',
    success: 'Success',
    aha: 'Aha Moment',
  };

  return (
    <div className={`p-5 my-8 border rounded-xl flex gap-4 shadow-sm ${styles[type]}`}>
      <div className="shrink-0 mt-0.5">{icons[type]}</div>
      <div className="flex-1 w-full min-w-0">
        <h5 className="font-semibold mb-2 text-sm uppercase tracking-wider opacity-90">
          {title || defaultTitles[type]}
        </h5>
        <div className="text-sm/relaxed space-y-2 opacity-90 [&>p]:m-0 [&>pre]:my-2 [&>pre]:p-3">
          {children}
        </div>
      </div>
    </div>
  );
}
