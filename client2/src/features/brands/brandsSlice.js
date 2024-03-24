import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import httpService from '../../services/http.service';

export const getAll = createAsyncThunk('brands/getall', async (_, { rejectWithValue }) => {
    try {
        const response = await httpService.get('brands');

        return response.data;
    } catch (error) {
        if (error.response && error.response.error) {
            return rejectWithValue(error.response.data.errors)
        } else {
            return rejectWithValue(error.message)
        }
    }
})

const initialState = {
    brands: [],
    status: null,
    error: null,
}

export const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAll.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.brands = action.payload.data.reduce((acc, obj) => {
                    acc[obj.id] = obj;
                    return acc;
                }, {});
            })
            .addCase(getAll.rejected, (state, action) => {
                state.status = 'error',
                state.error = action.payload;
            })

    }
})

export const getOneByName = (state, name) => {
    if ( !name ) return null;
    const brandsFiltered  = Object.values(state.brands.brands)
        .filter((brand) => {
        return brand.name.toLowerCase() === 
        name.toLowerCase()
    })
    const b = brandsFiltered.length !== 0 ? brandsFiltered[0] : null
    return b

}

export const getOneByURL = (state, url) => {
    if ( !url ) return null;
    const brandsFiltered  = Object.values(state.brands.brands)
        .filter((brand) => {
        return brand.url === url
    })
    const b = brandsFiltered.length !== 0 ? brandsFiltered[0] : null
    return b

}

export default brandsSlice.reducer;

