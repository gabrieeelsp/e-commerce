import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import httpService from '../../services/http.service';

export const getAll = createAsyncThunk('rubros/getall', async (_, { rejectWithValue }) => {
    try {
        const response = await httpService.get('rubros');

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
    rubros: [],
    status: null,
    error: null,
}

export const rubrosSlice = createSlice({
    name: 'rubros',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAll.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.rubros = action.payload.data;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.status = 'error',
                state.error = action.payload;
            })

    }
})

export const getOneByName = (state, name) => {
    const rubro = state.rubros.rubros.filter((rubro) => rubro.name.toUpperCase() === name.toUpperCase())
    return rubro;
}

export default rubrosSlice.reducer;

