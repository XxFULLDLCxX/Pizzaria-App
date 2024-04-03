import { CartSheet } from '@/components/cart/cart-sheet';
import { Header } from './header-@types';

interface HeaderCartProps extends Header { }

export function HeaderCart({ children }: HeaderCartProps) {
  return (
    <div className="flex justify-end">
      <CartSheet />
    </div>
  );
}
