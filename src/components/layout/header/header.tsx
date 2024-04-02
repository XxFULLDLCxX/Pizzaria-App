import { Header } from './header-@types';

interface HeaderElementProps extends Header { }

export function HeaderElement({ children }: HeaderElementProps) {
  return <header className="bg-slate-900 shadow-xl">{children}</header>;
}
