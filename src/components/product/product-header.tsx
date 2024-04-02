import { CardHeader } from '@/components/ui/card';
import { ProductDiv } from './product-types';

interface ProductHeader extends ProductDiv {
}

export function ProductHeader({ children, ...restProps }: ProductHeader) {
  return (
    <CardHeader {...restProps}>
      <header className="object-cover">{children}</header>
    </CardHeader>
  );
}
