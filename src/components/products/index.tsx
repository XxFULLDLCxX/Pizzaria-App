'use client';
import { useState } from 'react';
import { ProductItem } from './product-item';
import { defaultProducts } from '@/utils/defaults';

export function Products() {
  const [products, setProducts] = useState(defaultProducts);

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
