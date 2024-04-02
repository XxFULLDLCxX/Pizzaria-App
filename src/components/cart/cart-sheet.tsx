'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AiOutlineShoppingCart, AiOutlineShopping } from 'react-icons/ai';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { defaultProducts } from '@/utils/defaults';
import { CartProductItem } from './cart-product-item';

interface MenuProps {}

export function CartSheet({}: MenuProps) {
  const [products, setProducts] = useState(defaultProducts);

  return (
    <Sheet>
      <SheetTrigger
        className="relative w-12 h-12 hover:bg-gray-700 cursor-pointer rounded-full"
        asChild
      >
        <div>
          <span className="sr-only">Open main menu</span>
          <AiOutlineShoppingCart
            className="h-6 w-6 absolute inset-0 left-[-5px] m-auto"
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-center justify-center top-[-15px] right-[-20px]">
            <span className="min-h-5 min-w-5 bg-blue-950 text-gray-300 flex items-center justify-center rounded-full text-[11px] bg-opacity-85 font-bold">
              {products.length}
            </span>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="px-5">
        <SheetHeader className="-mt-4">
          <SheetTitle className="flex justify-start items-center gap-5">
            <AiOutlineShopping className="text-left ml-[-2px]" />
            Carrinho
          </SheetTitle>
          <SheetDescription className="text-left pb-[1px]">
            Retire o que não quiser comprar.
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <ScrollArea className="cart-scroll absolute left-0 right-0 w-full">
          <ul className="grid grid-cols-1 gap-4 w-full">
            {products.map((data) => (
              <li key={data.id}>
                <CartProductItem data={data} />
              </li>
            ))}
          </ul>
        </ScrollArea>
        <Separator />
        <SheetFooter className="absolute bottom-0 left-0 w-full h-[41px]">
          <div className="flex items-center justify-between px-5 w-full">
            <h2 className="font-bold text-md mr-auto flex items-center gap-1">
              TOTAL:{' '}
              <span className="text-lg">
                {products.reduce((totalPrice, { price }) => totalPrice + price, 0)}
              </span>
            </h2>
            <SheetClose asChild className="">
              <Button type="submit" className="bg-emerald-600 font-bold text-gray-200 text-lg h-8">
                Comprar
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
