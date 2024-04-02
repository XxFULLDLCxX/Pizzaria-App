import { Card } from '../ui/card';
import { ProductDiv } from './product-types';

interface ProductCard extends ProductDiv {

}

export function ProductCard({ children, ...restProps }: ProductCard) {
  return <Card className="shadow-md w-full bg-red-400" {...restProps}>{children}</Card>;
}
