import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import productsSlice from '../features/products/productsSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        products: productsSlice,
    }
})