'use client';

interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <main className="py-4 scroll-m-4" style={{ scrollMarginTop: '50px' }}>
      {children}
    </main>
  );
}
