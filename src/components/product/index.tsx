import { ProductAddToCart, ProductRemoveToCart } from './product-actions';
import { ProductCard } from './product-card';
import { ProductContent } from './product-content';
import { ProductFooter } from './product-footer';
import { ProductHeader } from './product-header';

export const Product = {
  Card: ProductCard,
  Header: ProductHeader,
  Content: ProductContent,
  Footer: ProductFooter,
  AddToCart: ProductAddToCart,
  RemoveToCart: ProductRemoveToCart,
};
