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
import { info } from '@/components/utils/info';

interface ProductAddToCart extends Omit<Product, 'children'> {
  data: ProductData;
}

export function ProductAddToCart({ data, ...restProps }: ProductAddToCart) {
  const dispatch = useAppDispatch();
  const press = () => {
    dispatch(addToCart(data));
    info.details({ text: 'Item adicionado ao carrinho.' });
  };
  return (
    <Button
      onClick={press}
      className="center gap-3 font-bold text-md dark:bg-opacity-10 dark:text-emerald-800 dark:hover:text-emerald-950 w-40 m-0"
      {...restProps}
    >
      R${data.price.toFixed(2)}
      <AiOutlineShoppingCart className="font-bold text-xl" />
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
    <ItemDeleteConfirm cancelAction={() => {}} proccedAction={press}>
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
