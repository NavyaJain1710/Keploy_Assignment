import React from 'react';
import { Bug, Wrench } from 'lucide-react';

interface ProblemCardProps {
  problem: string;
  cause: React.ReactNode;
  fix: React.ReactNode;
}

export function ProblemCard({ problem, cause, fix }: ProblemCardProps) {
  return (
    <div className="border border-red-200 dark:border-red-900/50 bg-white dark:bg-gray-950 rounded-xl overflow-hidden my-6 shadow-sm">
      <div className="bg-red-50 dark:bg-red-900/20 px-5 py-3 border-b border-red-200 dark:border-red-900/50 flex items-start gap-3">
        <Bug className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
        <h4 className="font-semibold text-red-900 dark:text-red-200 m-0 text-base">{problem}</h4>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Why it happened</div>
          <div className="text-sm text-gray-700 dark:text-gray-300 [&>code]:bg-gray-100 dark:[&>code]:bg-gray-800 [&>code]:px-1 [&>code]:rounded [&>code]:text-pink-600 dark:[&>code]:text-pink-400 font-mono">
            {cause}
          </div>
        </div>
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-500 mb-1 flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5" /> The Fix
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {fix}
          </div>
        </div>
      </div>
    </div>
  );
}
