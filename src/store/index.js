import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';
import categoriesReducer from './categoriesSlice';
import saleReducer from './saleSlice';
import userReducer from './userSlice';
import { saveCartItems } from './cartStorage';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    categories: categoriesReducer,
    sale: saleReducer,
    user: userReducer,
  },
});

store.subscribe(() => {
  saveCartItems(store.getState().cart.items);
});
