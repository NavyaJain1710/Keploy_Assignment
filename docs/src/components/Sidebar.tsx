'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'what-were-building', title: 'What we\'re building', num: '01' },
  { id: 'what-keploy-does', title: 'What Keploy does', num: '02' },
  { id: 'prerequisites', title: 'Prerequisites', num: '03' },
  { id: 'project-setup', title: 'Project setup', num: '04' },
  { id: 'start-redis', title: 'Start Redis', num: '05' },
  { id: 'start-keploy', title: 'Start Keploy', num: '06' },
  { id: 'send-api-requests', title: 'Send API requests', num: '07' },
  { id: 'inspect-test-cases', title: 'Inspect test cases', num: '08' },
  { id: 'run-keploy-test', title: 'Run Keploy test', num: '09' },
  { id: 'common-problems', title: 'Common problems', num: '10' },
  { id: 'final-checklist', title: 'Final checklist', num: '11' },
];

export function Sidebar() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // We observe all headings to update the active sidebar link
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' } // Triggers when heading hits the top 20% of the viewport
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    // Check if URL has a hash on initial load
    const hash = window.location.hash.replace('#', '');
    if (hash && SECTIONS.some(s => s.id === hash)) {
      setActiveId(hash);
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.history.pushState(null, '', `#${id}`);
      setActiveId(id);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="w-full md:w-[240px] shrink-0 md:sticky top-16 md:h-[calc(100vh-4rem)] overflow-y-auto py-8 hidden md:flex flex-col">
      <div className="bg-white/40 dark:bg-gray-900/20 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/60 rounded-2xl p-5 shadow-sm h-full flex flex-col hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
        <h4 className="font-bold text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6 shrink-0">
          On this page
        </h4>
        <nav className="flex-1 flex flex-col justify-between">
          {SECTIONS.map((s) => {
            const isActive = activeId === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => handleClick(e, s.id)}
                className={`group flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                  isActive
                    ? 'text-orange-600 dark:text-orange-400 bg-orange-500/10 dark:bg-orange-500/10 font-semibold'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span className={`font-mono text-[10px] shrink-0 transition-opacity ${isActive ? 'opacity-100 text-orange-500' : 'opacity-40 group-hover:opacity-100'}`}>
                  {s.num}
                </span>
                <span className="truncate">{s.title}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
