import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    postSaved: [],
    user: {},
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutSuccess: (state) => {
            state.user = {}
            state.isLoggedIn = false
            state.postSaved = []
        },
        loginSuccess: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
            state.postSaved = action.payload.postsSaved
        },
        addSavedPosts: (state, action) => {
            state.postSaved = action.payload.postsSaved
        },
    },
})

export const { logoutSuccess, loginSuccess, addSavedPosts } = userSlice.actions

export default userSlice.reducer
