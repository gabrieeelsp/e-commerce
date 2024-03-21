import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import httpService from '../../services/http.service'

export const addItem = createAsyncThunk('cart/additem', async ({ productId, quantity}, {rejectWithValue}) => {
    const cartId = localStorage.getItem('cart_id')
    try {
        const response = await httpService.post('sales/add_item', {
            saleid: cartId ? cartId : null,
            productid: productId,
            quantity,
        })
        return response.data;
    } catch (error) {
        if ( error.response && error.response.data.error ) {
            return rejectWithValue(error.response.data.error)
        } else {
            return rejectWithValue(error.message)
        }
    }
})

const initialState = {
    cartId: null,
    items: [],

    status: null,
    error: null,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder
            .addCase(addItem.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.status = 'succeedded'
                const { saleId, saleitem } = action.payload

                if ( saleId ) {
                    localStorage.setItem('cart_id', saleId)
                    state.cartId = saleId
                    state.items = []
                }

                const si = state.items.find((item) => item.product.id === saleitem.product.id)

                if ( si ) {
                    si.quantity = saleitem.quantity
                } else {
                    state.items.push(saleitem)
                }

            })
            .addCase(addItem.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
            })
    }
})

export default cartSlice.reducer;