import { createAsyncThunk } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { auth } from "../../config/firebase"

const getUser = user => ({
    id: user.uid,
    name: user.displayName,
    email: user.email
})
export const register = createAsyncThunk("auth/register",
    async ({name, email, password}) => {
        const {user} = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(user, {displayName: name})
        return getUser(user)
    }
)
export const login = createAsyncThunk("auth/login",
    async ({email, password}) => {
        const {user} = await signInWithEmailAndPassword(auth, email, password)
        return getUser(user)
    }
)
export const logout = createAsyncThunk("auth/logout", 
    async () => {await signOut(auth)}
)
export const setPending = state => {
    state.error = null
    state.isLoading = true
}
export const setRejected = (state, action) => {
    state.error = action.error.message
    state.isLoading = false
}