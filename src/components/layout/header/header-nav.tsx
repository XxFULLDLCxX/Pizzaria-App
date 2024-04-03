import { Header } from './header-@types';

interface HeaderNavProps extends Header { }

export function HeaderNav({ children }: HeaderNavProps) {
  return (
    <nav className="max-w-7xl w-full px-10 h-16 lg:px-8 lg:py-5" aria-label="Global">
      {children}
    </nav>
  );
}
