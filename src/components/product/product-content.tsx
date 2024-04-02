import { CardContent } from '@/components/ui/card';
import { Product } from './product-@types';

interface ProductContent extends Product { }

export function ProductContent({ children, ...restProps }: ProductContent) {
  return (
    <CardContent {...restProps}>
      <main>{children}</main>
    </CardContent>
  );
}
