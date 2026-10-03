import React from 'react';

export function Hero() {
  return (
    <div className="py-12 border-b border-gray-200 dark:border-gray-800 mb-12">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-widest text-orange-600 dark:text-orange-400 uppercase">
              Keploy DevRel Assignment
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              From Go API to Regression Tests with Keploy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              A beginner-friendly walkthrough of recording and replaying API tests in a Go application.
              Say goodbye to writing mock files by hand and boilerplate HTTP clients.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#quick-start" className="inline-flex items-center justify-center h-11 px-6 font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              Start the tutorial &rarr;
            </a>
            <a href="https://github.com/keploy/samples-go" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-11 px-6 font-medium border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors">
              View on GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {['Go', 'Gin', 'Redis', 'Keploy', 'Docker', 'Next.js', 'MDX'].map(tech => (
              <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden lg:block w-full max-w-sm shrink-0">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02]" />
            <div className="relative space-y-4 font-mono text-sm">
              <div className="p-3 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-lg text-center shadow-sm">
                <span className="text-blue-600 dark:text-blue-400">API Request</span>
              </div>
              <div className="flex justify-center text-gray-400">&darr;</div>
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/50 rounded-lg text-center shadow-sm">
                <span className="text-orange-600 dark:text-orange-400 font-semibold">Keploy Record</span>
              </div>
              <div className="flex justify-center text-gray-400">&darr;</div>
              <div className="p-3 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-lg text-center shadow-sm">
                <span className="text-purple-600 dark:text-purple-400">Test Case (YAML)</span>
              </div>
              <div className="flex justify-center text-gray-400">&darr;</div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 rounded-lg text-center shadow-sm group-hover:scale-105 transition-transform">
                <span className="text-green-600 dark:text-green-400 font-semibold">Regression Test &check;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
