'use client';
import { ProductState } from '@/lib/features/products/products-slice';
import { ProductItem } from './product-item';
import { useAppSelector } from '@/lib/features/common/hooks';
import { useEffect } from 'react';

export function Products() {
  const products = useAppSelector(({ product }: { product: ProductState }) => product.products);



  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-screen-lg mx-auto">
      {products.map((data) => (
        <li key={data.id}>
          <ProductItem data={data} />
        </li>
      ))}
    </ul>
  );
}
