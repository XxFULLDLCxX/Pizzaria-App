'use client';
import { ProductState } from '@/lib/features/products/products-slice';
import { ProductItem } from './product-item';
import { useAppSelector } from '@/lib/features/common/hooks';

export function Products() {
  const products = useAppSelector(({ product }: { product: ProductState }) => product.products);

  return (
    <div className="center justify-start flex-col gap-10 h-max">
      <h1 className="text-5xl font-bold text-center">Pizzaria App</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-screen-lg mx-auto pb-30">
        {products.map((data) => (
          <li key={data.id}>
            <ProductItem data={data} />
          </li>
        ))}
      </ul>
    </div>
  );
}
