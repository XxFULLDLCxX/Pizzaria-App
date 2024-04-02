import { Card } from '../ui/card';
import { Product } from './product-@types';

interface ProductCard extends Product { }

export function ProductCard({ children, ...restProps }: ProductCard) {
  return (
    <Card className="shadow-md w-full bg-red-400" {...restProps}>
      {children}
    </Card>
  );
}
