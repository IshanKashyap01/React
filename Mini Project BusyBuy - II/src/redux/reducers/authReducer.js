import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, setPending, setRejected } from "../thunks/authThunks";

const INITIAL_STATE = {
    user: null,
    isLoading: true,
    error: null
}
const authSlice = createSlice({
    name: "authReducer",
    initialState: INITIAL_STATE,
    reducers: {
        setAuthUser: (state, action) => {
            state.user = action.payload
            state.isLoading = false
            state.error = null
        }
    },
    extraReducers: builder => {
        builder
        // cases for user registration
        .addCase(register.pending, setPending)
        .addCase(register.fulfilled, setUser)
        .addCase(register.rejected, setRejected)
        // cases for user login
        .addCase(login.pending, setPending)
        .addCase(login.fulfilled, setUser)
        .addCase(login.rejected, setRejected)
        // cases for user logout
        .addCase(logout.pending, setPending)
        .addCase(logout.fulfilled, state => {
            state.user = null
            state.isLoading = false
            state.error = false
        })
        .addCase(logout.rejected, setRejected)
    }
})

function setUser(state, action)
{
    state.user = action.payload
    state.isLoading = false
    state.error = null
}

export const authReducer = authSlice.reducer
export const {setAuthUser} = authSlice.actions