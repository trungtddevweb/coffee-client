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
        },
        loginSuccess: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
            state.postSaved = action.payload.postsSaved
        },
        addSavedPosts: (state, action) => {
            const postId = action.payload._id
            const isPostSaved = state.postSaved.includes(postId)
            if (isPostSaved) {
                state.postSaved.filter((post) => post !== postId)
            } else {
                state.savedPosts.push(postId)
            }
        },
    },
})

export const { logoutSuccess, loginSuccess } = userSlice.actions

export default userSlice.reducer
