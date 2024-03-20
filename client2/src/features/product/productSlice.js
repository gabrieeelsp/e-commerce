import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import httpService from '../../services/http.service'

export const getOneByURL = createAsyncThunk('product/getonebyurl', async ({url}, {rejectWithValue}) => {
    try {
        const response = httpService.get(`/products/${url}`);
        return (await response).data;
    } catch( error) {
        if (error.response && error.response.data.error) {
            return rejectWithValue(error.response.data.error)
        } else {
            return rejectWithValue(error.message)
        }
    }
})

const initialState = {
    product: null,
    status: null,
    error: null,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getOneByURL.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getOneByURL.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.product = action.payload
            })
            .addCase(getOneByURL.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })
    }
})

export default productSlice.reducer;