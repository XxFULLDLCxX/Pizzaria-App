import { ProductData } from '@/lib/protocols';
import { defaultProducts } from '@/utils/defaults';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ProductState {
  products: ProductData[];
}

const initialState = {
  products: defaultProducts,
} as ProductState;

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductData>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<ProductData['id']>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = ProductSlice.actions;
