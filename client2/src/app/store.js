import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import productsSlice from '../features/products/productsSlice';
import rubrosSlice from '../features/rubros/rubrosSlice';
import productSlice from '../features/product/productSlice';
import cartSlice from '../features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        products: productsSlice,
        rubros: rubrosSlice,
        product: productSlice,
        cart: cartSlice,
    }
})