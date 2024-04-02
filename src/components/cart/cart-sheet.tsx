'use client';

import { Button } from '@/components/ui/button';
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
import { CartProductItem } from './cart-product-item';
import { useAppSelector } from '@/lib/features/common/hooks';
import { CartState } from '@/lib/features/cart/cart-slice';
import { info } from '@/components/utils/info';

interface MenuProps {}

export function CartSheet({}: MenuProps) {
  const [checkout, setCheckout] = useState(false);
  const { items, total } = useAppSelector(({ cart }: { cart: CartState }) => cart);

  return (
    <>
      <Sheet>
        <SheetTrigger
          className="relative w-12 h-12 hover:bg-emerald-700 bg-opacity-40 cursor-pointer rounded-full"
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
                {items.length}
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
          {items.length !== 0 ? (
            <ScrollArea className="cart-scroll absolute left-0 right-0 w-full">
              <ul className="grid grid-cols-1 gap-4 w-full">
                {items.map((data) => (
                  <li key={data.id}>
                    <CartProductItem data={data} />
                  </li>
                ))}
              </ul>
            </ScrollArea>
          ) : (
            <div className="absolute inset-0 h-max m-auto">
              <h2 className="text-center font-bold text-xl">Ainda não há items no Carrinho.</h2>
            </div>
          )}
          <Separator />
          <SheetFooter className="absolute bottom-0 left-0 w-full h-[64px]">
            <div className="flex items-center justify-between px-5 w-full">
              <h2 className="font-bold text-md mr-auto flex items-center gap-1">
                TOTAL: <span className="text-lg">{total.toFixed(2)}</span>
              </h2>
              <SheetClose asChild className="">
                <Button
                  onClick={() => info.success({ text: 'Comprar Feita ', total: total?.toFixed(2) })}
                  type="submit"
                  className="bg-emerald-600 font-bold text-gray-200 text-lg h-8"
                  disabled={items.length === 0}
                >
                  Comprar
                </Button>
              </SheetClose>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
