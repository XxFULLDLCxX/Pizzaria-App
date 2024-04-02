import { CardFooter } from '@/components/ui/card';
import { Product } from './product-@types';

interface ProductFooter extends Product { }

export function ProductFooter({ children, ...restProps }: ProductFooter) {
  return (
    <CardFooter {...restProps}>
      <footer>{children}</footer>
    </CardFooter>
  );
}
