import { ProductProps } from '@/components/products/product-item';
import { Product } from '@/components/product';
import Image from 'next/image';

export function CartProductItem({ data }: ProductProps) {
  const { name, price, image } = data;
  return (
    <Product.Card className="flex justify-center items-center p-0 h-20">
      <Product.Header className={`bg-[${image}] p-0 bg-cover`}>
        <Image src={image} alt={name} width={200} height={200} className="w-full h-20 rounded-sm" />
      </Product.Header>
      <Product.Content className="h-max py-0">
        <h1>{name}</h1>
        <p className="font-bold">R$ {price.toFixed(2)}</p>
      </Product.Content>
      <Product.Footer className="relative ml-auto h-full w-6">
        <Product.RemoveToCart
          data={data}
          className="absolute top-[-2px] right-[-2px] z-30 hover:h-10 hover:w-10"
        />
      </Product.Footer>
    </Product.Card>
  );
}
