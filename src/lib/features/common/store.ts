import { ConfigureStoreOptions, configureStore } from '@reduxjs/toolkit';
import { CartSlice } from '@/lib/features/cart/cart-slice';
import { ProductSlice } from '@/lib/features/products/products-slice';
import { api } from './api';

export const makeStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      cart: CartSlice.reducer,
      product: ProductSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    ...options,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
