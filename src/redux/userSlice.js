import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    user: {}
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutSuccess: state => {
            state.user = {}
            state.isLoggedIn = false
        },
        loginSuccess: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
        }
    }
})

export const { logoutSuccess, loginSuccess } = userSlice.actions

export default userSlice.reducer
