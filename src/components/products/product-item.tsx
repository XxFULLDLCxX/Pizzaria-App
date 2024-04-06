import { ProductData } from '@/lib/protocols';
import { Product } from '../product';
import Image from 'next/image';



export interface ProductProps {
  data: ProductData;
}

export function ProductItem({ data }: ProductProps) {
  const { name, image, price } = data;
  return (
    <Product.Card className="">
      <Product.Header className={`bg-[${image}] p-0 bg-cover`}>
        <Image src={image} alt={name} className="w-full h-20 rounded-sm" />
      </Product.Header>
      <Product.Content className="p-4">
        <h1 className="text-md">{name}</h1>
        <p className="font-bold text-md">R$ {price.toFixed(2)}</p>
      </Product.Content>
      <Product.Footer className="center">
        <Product.AddToCart data={data}></Product.AddToCart>
      </Product.Footer>
    </Product.Card>
  );
}
