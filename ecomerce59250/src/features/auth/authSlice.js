import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    idToken: "",
    //localId: ""
}

console.log('9', initialState.email)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log('200', state)
            state.email = action.payload.email
            state.idToken = action.payload.idToken
            //  state.localId = action.payload.localId
        },
        clearUser: (state) => {
            state.email = ""
            state.idToken = ""
            //state.localId = ""
        }
    }
})

export const { setUser, clearUser } = authSlice.actions

export default authSlice.reducer