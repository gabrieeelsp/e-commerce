import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import httpService from '../../services/http.service';

const initialState = {
    user: null,
    status: null,
    error: null,
    verified: false,
}

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    console.log('saliendo')
    try {
        const response = await httpService.post('users/signout');

        return response.data;
    } catch (error) {
        if ( error.response && error.response.data.error ) {
            return rejectWithValue(error.response.data.error)
        }
        return rejectWithValue(error.message)
    } finally {
        localStorage.removeItem('accessToken');
    }
})

export const me = createAsyncThunk('auth/me', async (_, { rejectWithValue }) => {
    try {
        const response = await httpService.get('users/me');

        return response.data;
    } catch (error) {
        localStorage.removeItem('accessToken');

        if (error.response && error.response.data.error) {
            return rejectWithValue(error.response.data.error)
        } else {
            return rejectWithValue(error.message)
        }
    }

})

export const login = createAsyncThunk('auth/login', async ({email, password}, { rejectWithValue }) => {
    try {
        const response = await httpService.post('users/signin', {
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
        const response = await httpService.post('users/signup', {
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
                state.status = 'succeeded';
                state.user = {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                };
                state.verified = true;
            })
            .addCase(me.rejected, (state, action) => {
                state.user = null;
                state.status = 'error';
                state.error = action.payload;
                state.verified = true;
            })

            .addCase(logout.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(logout.fulfilled, (state) => {
                state.status = 'succeeded';
                state.user = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
                state.user = null;
            })
    }
})

export const { formExited, userVerified } = authSlice.actions;

export default authSlice.reducer;