import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import { FileCode2 } from 'lucide-react';
import { ReadingProgress } from '@/components/ReadingProgress';
import { Sidebar } from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Keploy DevRel Assignment',
  description: 'From Go API to Regression Tests with Keploy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#fafafa] dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 selection:bg-orange-200 dark:selection:bg-orange-900 relative min-h-screen`}>
        <ReadingProgress />
        
        {/* Premium Background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-0 right-0 top-[-10%] -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-500 opacity-[0.12] dark:opacity-[0.15] blur-[100px]" />
          <div className="absolute left-[-10%] top-[20%] -z-10 h-[250px] w-[250px] rounded-full bg-purple-500 opacity-[0.08] dark:opacity-[0.1] blur-[100px]" />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] transition-colors">
              <div className="w-full px-4 lg:px-10 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 text-white p-1.5 rounded-lg">
                    <FileCode2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
                    Keploy Docs
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-mono px-2 py-1 rounded ml-2 border border-gray-200 dark:border-gray-700">
                    Go + Gin + Redis
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="#quick-start"
                    className="hidden sm:flex items-center justify-center text-sm font-medium px-4 h-9 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    Start Tutorial
                  </a>
                  <a
                    href="https://github.com/keploy/samples-go"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <ThemeToggle />
                </div>
              </div>
            </header>

            {/* Main Layout */}
            <div className="w-full px-4 lg:px-10 flex-1 flex flex-col md:flex-row gap-8 lg:gap-12">

              {/* Sidebar */}
              <Sidebar />

              {/* Content */}
              <main className="flex-1 py-8 min-w-0 pb-24">
                <div className="prose prose-gray dark:prose-invert max-w-[900px]">
                  {children}
                </div>
              </main>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-200/60 dark:border-gray-800/60 bg-white/40 dark:bg-gray-900/20 backdrop-blur-md py-12 mt-auto">
              <div className="w-full px-4 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <div className="font-bold text-lg mb-1">Keploy DevRel Assignment</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Built with Next.js + MDX as a hands-on developer tutorial.
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
                  <a href="https://github.com/keploy/samples-go" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">GitHub</a>
                  <a href="https://keploy.io/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Keploy</a>
                  <a href="/" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Documentation</a>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
