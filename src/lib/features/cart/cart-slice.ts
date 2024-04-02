import { ProductData } from '@/lib/protocols';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartState {
  items: ProductData[];
  total: number;
  length: number;
}

const initialState = {
  items: [],
  total: 0,
  length: 0,
} as CartState;

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductData>) => {
      const totalId = state.items.reduce((id, item) => id + item.id, 0);
      state.items.push({ ...action.payload, id: totalId + action.payload.id });
      state.total = state.items.reduce((total, n) => total + n.price, 0);
    },
    removeToCart: (state, action: PayloadAction<ProductData['id']>) => {
      console.log('payload', action.payload);

      state.items = state.items.filter((item) => item.id !== action.payload);
      state.total = state.items.reduce((total, n) => total + n.price, 0);
    },
  },
});

export const { addToCart, removeToCart } = CartSlice.actions;
