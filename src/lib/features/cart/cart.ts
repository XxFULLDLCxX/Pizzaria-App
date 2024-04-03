import { Prisma, CartItem } from '@prisma/client';
import { api } from '@/lib/features/common/api';

type CartItemInput = Omit<CartItem, 'CreatedAt' | 'UpdatedAt'>;

export const CartItemApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query<CartItem[], void>({
      query: () => '/cart/items',
    }),
    addItem: builder.query<CartItem, void>({
      query: (body) => ({
        url: '/cart/items',
        method: 'POST',
        body,
      }),
    }),
    deleteItem: builder.mutation<undefined, Number>({
      query: (id) => {
        return {
          url: `cart/items/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});
export const { useAddItemQuery, useDeleteItemMutation, useGetItemsQuery } = CartItemApi;
export const {
  endpoints: { getItems, addItem, deleteItem },
} = CartItemApi;
