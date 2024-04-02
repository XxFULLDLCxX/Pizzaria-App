import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Button } from '../ui/button';
import { Product } from './product-@types';
import { useAppDispatch } from '@/lib/features/common/hooks';
import { addToCart, removeToCart } from '@/lib/features/cart/cart-slice';
import { ProductData } from '@/lib/protocols';
import { toast } from 'sonner';
import { ItemDeleteConfirm } from '../cart/item/item-delete-confirm';
import { IoClose } from 'react-icons/io5';

interface ProductAddToCart extends Omit<Product, 'children'> {
  data: ProductData;
}

export function ProductAddToCart({ data, ...restProps }: ProductAddToCart) {
  const dispatch = useAppDispatch();
  const press = () => {
    console.log('data antes', data.id);
    dispatch(addToCart(data));
    const id = data.id;
    // toast.info('Item adicionado ao carrinho.')
    toast.custom((t) => (
      <div className="w-[300px] h-[70px] relative p-4 bg-[var(--background)] box-border border-2 rounded-md dark:border-emerald-200 border-emerald-800">
        <h1 className="text-left font-bold text-md text-emerald-800 dark:text-emerald-200">
          Item adicionado ao carrinho.
        </h1>
        <button className="absolute top-2 right-2 h-6 w-6 p-0" onClick={() => toast.dismiss(t)}>
          <IoClose size="26" className="text-emerald-950 dark:text-emerald-200" />
        </button>
      </div>
    ));
  };
  return (
    <Button onClick={press} {...restProps}>
      {data?.price.toFixed(2)}
      <AiOutlineShoppingCart />
    </Button>
  );
}

interface ProductRemoveToCart extends Product {
  data: ProductData;
}

export function ProductRemoveToCart({ data, children, ...restProps }: ProductRemoveToCart) {
  const dispatch = useAppDispatch();
  const press = () => {
    dispatch(removeToCart(data.id));
    console.log(data.id);
  };

  return (
    <ItemDeleteConfirm cancelAction={() => { }} proccedAction={press}>
      <Button
        {...restProps}
        className={`flex bg-red-900 bg-opacity-40 text-blue-200 rounded-full rounded-tr-none p-0 h-6 w-6 hover:bg-red-900 ${restProps.className}`}
      >
        {children}
        <FaRegTrashAlt />
      </Button>
    </ItemDeleteConfirm>
  );
}
