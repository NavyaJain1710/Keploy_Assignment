import type { MDXComponents } from 'mdx/types';
import * as React from 'react';
import { CopyButton } from './components/CopyButton';

// Extract text from nested children for the copy button
const extractText = (node: React.ReactNode): string => {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (React.isValidElement(node)) {
    return extractText((node as React.ReactElement<{ children?: React.ReactNode }>).props.children);
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join('');
  }
  return '';
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-extrabold tracking-tight mb-8 mt-12 text-gray-900 dark:text-white">{children}</h1>,
    h2: ({ children, id }) => (
      <h2 id={id} className="text-2xl font-bold tracking-tight mt-16 mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2 scroll-mt-24">
        {children}
      </h2>
    ),
    h3: ({ children, id }) => <h3 id={id} className="text-xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white scroll-mt-24">{children}</h3>,
    p: ({ children }) => <p className="mb-6 text-gray-700 dark:text-gray-300 leading-7">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2 leading-7">{children}</ul>,
    li: ({ children }) => <li>{children}</li>,
    a: ({ href, children }) => <a href={href} className="font-medium text-blue-600 dark:text-blue-400 hover:underline underline-offset-4">{children}</a>,
    code: ({ children }) => <code className="bg-gray-100 dark:bg-gray-800/60 px-1.5 py-0.5 rounded-md text-[0.875em] text-pink-600 dark:text-pink-400 font-mono border border-gray-200 dark:border-gray-700">{children}</code>,
    pre: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
      const text = extractText(props.children);
      return (
        <div className="relative group my-8">
          <div className="absolute flex items-center top-0 inset-x-0 px-4 h-10 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 rounded-t-xl">
            <div className="flex space-x-1.5 z-10">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-gray-400 pointer-events-none">
              Terminal
            </div>
          </div>
          <CopyButton text={text} className="absolute right-3 top-1" />
          <pre {...props} className="bg-gray-900 text-gray-100 p-4 pt-12 pr-14 rounded-xl overflow-x-auto shadow-xl border border-gray-800 text-[0.875em] font-mono leading-relaxed">
            {props.children}
          </pre>
        </div>
      );
    },
    blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-6 py-1 italic my-8 text-gray-600 dark:text-gray-400 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-lg">{children}</blockquote>,
    ...components,
  };
}
