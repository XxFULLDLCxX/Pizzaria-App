import { Header } from './header-@types';

interface HeaderFixedProps extends Header { }

export function HeaderFixed({ children }: HeaderFixedProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-16 px-10 flex items-center justify-between shadow-md backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-50 rounded-b-lg">
      {children}
    </div>
  );
}
