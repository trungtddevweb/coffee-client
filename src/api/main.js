import { setToken } from '@/services/auth'
import mainAPI from './base'

// Auth APIs
export const signUpAPI = async (data) => {
    return await mainAPI.post('/auth/sign-up', data)
}

export const signInAPI = async (data) => {
    const response = await mainAPI.post('/auth/sign-in', data)
    setToken(response.data.accessToken)
    return response.data
}

export const signInWithGoogleAPI = async (idToken) => {
    const response = await mainAPI.post('/auth/google-sign-in', { idToken })
    setToken(response.data.accessToken)
    return response.data
}

export const signOutAPI = async () => {
    return await mainAPI.post('/auth/sign-out', null)
}

// POST
export const getAllPostAPI = async () => {
    const res = await mainAPI.get('/post/all-post')
    return res.data
}

export const getPostDetailAPI = async (postId) => {
    const res = await mainAPI.get(`/post/find/${postId}`)
    return res.data
}

export const getPostByTagAPI = async (tagName) => {
    const res = await mainAPI.get(`/post/tag/${tagName}`)
    return res.data
}

export const getPostTrendingAPI = async () => {
    const res = await mainAPI.get('/post/trending')
    return res.data
}

export const getPostSavedAPI = async () => {
    const res = await mainAPI.get('/user/find/saved-post')
    return res.data
}

export const toggleLikePostAPI = async (postId) => {
    const res = await mainAPI.post('/post/toggle-like', { postId })
    return res.data
}

// User
export const addPostToSaveAPI = async (postId) => {
    const res = await mainAPI.post('/user/saved-post', { postId })
    return res.data
}

// Comment
export const createCommentAPI = async (data) => {
    const res = await mainAPI.post('/comment/', data)
    return res.data
}

// Write
export const createdPostAPI = async (payload) => {
    return await mainAPI.post('/post/create', payload)
}
