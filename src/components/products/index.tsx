'use client';
import { ProductState } from '@/lib/features/products/products-slice';
import { ProductItem } from './product-item';
import { useAppSelector } from '@/lib/features/common/hooks';
import { ScrollArea } from '../ui/scroll-area';

export function Products() {
  const products = useAppSelector(({ product }: { product: ProductState }) => product.products);

  return (
    <div className="center justify-start flex-col gap-5 max-w-screen-lg mx-auto max-h-screen pt-14 sm:w-full">
      <h1 className="text-5xl font-bold text-center p-5">Pizzaria App</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 h-max sm:w-full">
        {products.map((data) => (
          <li key={data.id} className="h-max">
            <ProductItem data={data} />
          </li>
        ))}
      </ul>
    </div>
  );
}
