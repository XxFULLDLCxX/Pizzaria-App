import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ProductProps } from './product-item';
import { ReactNode } from 'react';

interface ProductWrapperProps extends ProductProps {
  children: ReactNode;
}

export function ProductWrapper({ data }: ProductWrapperProps) {
  const { name, price, image } = data;

  return (
    <Card className="shadow-md w-full">
      <CardHeader>
        <header>
          <h1>{name}</h1>
        </header>
      </CardHeader>
      <CardContent>
        <main>O conteudo</main>
      </CardContent>
      <CardFooter>Preço e Botão de Compra.</CardFooter>
    </Card>
  );
}
