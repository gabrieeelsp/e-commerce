import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import httpService from '../../services/http.service';

export const getAll = createAsyncThunk('products/getall', async ({limit, current_page, rubroId, subrubroId}, { rejectWithValue }) => {
    try {
        const response = await httpService.get('products', {
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
        limit: 3,
    },

    filters: {
        name: '',
    }
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers (builder) {
        builder
            .addCase(getAll.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'succeeded';
                if ( action.payload.pagination.current_page === 1) {
                    state.products = action.payload.data;
                } else {
                    state.products = state.products.concat(action.payload.data);
                }
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

export const { rubroChanged, subrubroChanged } = productsSlice.actions;

export default productsSlice.reducer;