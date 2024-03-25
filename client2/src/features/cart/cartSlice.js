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

export const removeItem = createAsyncThunk('cart/removeitem', async ({productId}, {rejectWithValue}) => {
    const cartId = localStorage.getItem('cart_id');
    try {
        const response = httpService.delete('sales/remove_item', {
            data: {
                saleid: cartId ? cartId : null,
                productid: productId,
            }
        })
        return (await response).data;
    } catch(error) { 
        if (error.response && error.response.data.error) {
            return rejectWithValue(error.response.data.error)
        } else {
            return rejectWithValue(error.message)
        }
    }
})

export const getCart = createAsyncThunk('cart/getcart', async (_, { rejectWithValue}) => {
    const cartId = localStorage.getItem('cart_id');
    try {
        const response = await httpService.get(`sales/${cartId}`)
        return response.data;
    } catch(error) { 
        if (error.response && error.response.data.error) {
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

    newItem: null,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setNewItem: (state, action) => {
            state.newItem = action.payload
        },
        removeNewItem: (state) => {
            state.newItem = null
        }
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

            .addCase(removeItem.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(removeItem.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = state.items.filter((item) => item.product.id !== action.payload.id)
            })
            .addCase(removeItem.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload
            })

            .addCase(getCart.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.cartId = action.payload.id
                state.items = action.payload.saleitems
            })
            .addCase(getCart.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload
                localStorage.removeItem('cart_id')
            })
    }
})

export const { setNewItem, removeNewItem } = cartSlice.actions

export default cartSlice.reducer;