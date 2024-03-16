import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user: null,
    status: null,
    error: null,
    verified: false,
}

export const me = createAsyncThunk('auth/me', async (_, { rejectWithValue }) => {
    console.log('me')
    try {
        const token = localStorage.getItem('accessToken');
        if (token) {
            const config = {
                headers: {
                    'Authorization': token,
                }
            }
            const response = await axios.get('users/me', config );

            return response.data;
        }
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

export const login = createAsyncThunk('auth/login', async ({email, password}, { rejectWithValue }) => {
    try {
        const response = await axios.post('users/signin', {
            email,
            password,
        })

        localStorage.setItem('accessToken', response.data.token)

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

export const register = createAsyncThunk('auth/register', async ({name, email, password}, { rejectWithValue }) => {
    try {
        const response = await axios.post('users/signup', {
            name,
            email,
            password,
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

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        formExited: (state) => {
            state.status = null;
            state.error = null;
        },
        userVerified: (state) => {
            state.verified = true;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(register.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(register.fulfilled, (state) => {
                state.status = 'succeeded';
                
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            })

            .addCase(login.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                };
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
                state.verified = true;
            })

            .addCase(me.fulfilled, (state, action) => {
                state.user = {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                };
                state.verified = true;
            })
    }
})

export const { formExited, userVerified } = authSlice.actions;

export default authSlice.reducer;