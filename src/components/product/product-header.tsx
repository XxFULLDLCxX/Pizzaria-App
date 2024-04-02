import { CardHeader } from '@/components/ui/card';
import { Product } from './product-@types';

interface ProductHeader extends Product { }

export function ProductHeader({ children, ...restProps }: ProductHeader) {
  return (
    <CardHeader {...restProps}>
      <header className="object-cover">{children}</header>
    </CardHeader>
  );
}
