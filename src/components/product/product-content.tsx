import { CardContent } from '@/components/ui/card';
import { ProductDiv } from './product-types';

interface ProductContent extends ProductDiv {

}

export function ProductContent({ children, ...restProps }: ProductContent) {
  return (
    <CardContent {...restProps}>
      <main>{children}</main>
    </CardContent>
  );
}
