'use client';

interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <main className="flex items-center justify-center h-full bg-sky-600">
      {children}
    </main>
  );
}
// "flex items-center justify-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 dark:from-blue-900 dark:to-gray-950"