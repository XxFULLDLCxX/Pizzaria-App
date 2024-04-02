import { CardFooter } from '@/components/ui/card';
import { ProductDiv } from './product-types';

interface ProductFooter extends ProductDiv {
}

export function ProductFooter({ children, ...restProps }: ProductFooter) {
  return (
    <CardFooter {...restProps}>
      <footer>{children}</footer>
    </CardFooter>
  );
}
