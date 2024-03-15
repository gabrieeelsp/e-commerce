import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAll = createAsyncThunk('products/getall', async ({limit, current_page, rubroId, subrubroId}, { rejectWithValue }) => {
    try {
        const response = await axios.get('products', {
            params: {
                limit,
                page: current_page,
                rubroid: rubroId,
                subrubroid: subrubroId,
            }
        });
        return response.data;

    } catch (error) {
        if (error.response && error.response.data.errors) {
            return rejectWithValue(error.response.data.errors)
        }else if (error.response && error.response.data.error) {
            return rejectWithValue(error.response.data.error)
        } else {
            return rejectWithValue(error.message)
        }
    }
})

const initialState = {
    products: [],
    status: null,
    error: null,
    pagination: {
        total_records: null,
        current_page: 1,
        total_pages: null,
        limit: 5,
    },

    filters: {
        rubroId: null,
        subrubroId: null,
        name: '',
    }
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        rubroIdChanged: (state, action) => {
            state.filters.rubroId = action.payload;
            state.filters.subrubroId = null;
        },
        subrubroChanged: (state, action) => {
            state.filters.rubroId = action.payload.rubroId
            state.filters.subrubroId = action.payload.subrubroId
        }
    },
    extraReducers (builder) {
        builder
            .addCase(getAll.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload.data;
                state.pagination.total_records = action.payload.pagination.total_pages;
                state.pagination.current_page = action.payload.pagination.current_page;
                state.pagination.total_pages = action.payload.pagination.total_pages;
                state.pagination.total_records = action.payload.pagination.total_pages;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })
    }
})

export const { rubroIdChanged, subrubroChanged } = productsSlice.actions;

export default productsSlice.reducer;