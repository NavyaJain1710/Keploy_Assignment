import React from 'react';
import { CopyButton } from './CopyButton';

export function QuickStart() {
  const steps = [
    { num: 1, title: 'Clone Repository', cmd: 'git clone https://github.com/keploy/samples-go.git' },
    { num: 2, title: 'Run Redis', cmd: 'redis-server' },
    { num: 3, title: 'Record Tests', cmd: 'sudo -E keploy record -c "go run ."' },
    { num: 4, title: 'Send Request', cmd: 'curl -i -X GET "http://localhost:3001/api/getVerificationCode"' },
    { num: 5, title: 'Replay Tests', cmd: 'sudo -E keploy test -c "go run ."' },
  ];

  return (
    <div id="quick-start" className="my-12 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 scroll-mt-24">
      <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
        <span className="text-orange-500">⚡</span> Quick Start
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {steps.map((step) => (
          <div key={step.num} className="flex gap-4 p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-bold text-sm">
              {step.num}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm mb-2 text-gray-900 dark:text-gray-100">{step.title}</div>
              <div className="relative group rounded-md bg-gray-100 dark:bg-gray-900 text-xs font-mono border border-transparent dark:border-gray-800">
                <CopyButton text={step.cmd} className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="overflow-x-auto whitespace-nowrap p-3 pr-14 text-gray-600 dark:text-gray-400">
                  <span className="select-none opacity-50 mr-2">$</span>
                  {step.cmd}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
