import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface CardWrapperProps {}

export function CardWrapper({}: CardWrapperProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <header>
          <h1>
            Pizza de Algo
          </h1>
        </header>
      </CardHeader>
      <CardContent>
        <main>
          O conteudo
        </main>
      </CardContent>
      <CardFooter>
        Preço e Botão de Compra.
      </CardFooter>
    </Card>
  )
}
