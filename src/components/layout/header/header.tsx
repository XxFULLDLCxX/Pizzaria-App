import { Header } from './header-@types';

interface HeaderElementProps extends Header { }

export function HeaderElement({ children }: HeaderElementProps) {
  return <header className="shadow-xl">{children}</header>;
}
