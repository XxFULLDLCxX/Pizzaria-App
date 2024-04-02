import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Button } from '../ui/button';
import { ProductButton } from './product-types';

interface ProductAddToCart extends Omit<ProductButton, 'children'> {
  children?: ProductButton['children'];
  price: string;
}

export function ProductAddToCart({ price, ...restProps }: ProductAddToCart) {
  return (
    <Button {...restProps}>
      {price}
      <AiOutlineShoppingCart />
    </Button>
  );
}

interface ProductRemoveToCart extends Omit<ProductButton, 'children'> {
  children?: ProductButton['children'];
}

export function ProductRemoveToCart({ children, ...restProps }: ProductRemoveToCart) {
  return (
    <Button {...restProps} className={`flex bg-red-900 bg-opacity-40 text-blue-200 rounded-full rounded-tr-none p-0 h-6 w-6 hover:bg-red-900 ${restProps.className}`}>
      {children}
      <FaRegTrashAlt />
    </Button>
  );
}
