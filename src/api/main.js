import mainAPI from './base'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

// Auth APIs
export const signUpAPI = async (data) => {
    return await mainAPI.post('/auth/sign-up', data)
}

export const signInAPI = async (data) => {
    const response = await mainAPI.post('/auth/sign-in', data)
    cookies.set('jwt', response.data.accessToken, { path: '/' })
    return response.data
}

export const signInWithGoogleAPI = async (idToken) => {
    const response = await mainAPI.post('/auth/google-sign-in', { idToken })
    cookies.set('jwt', response.data.accessToken, { path: '/' })
    return response.data
}

export const signOutAPI = async (accessToken) => {
    await mainAPI.post('/auth/sign-out', null, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    cookies.remove('jwt')
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

export const getPostSavedAPI = async (accessToken) => {
    const res = await mainAPI.get('/user/find/saved-post', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    return res.data
}

export const toggleLikePostAPI = async (postId, token) => {
    const res = await mainAPI.post(
        '/post/toggle-like',
        { postId },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )
    return res.data
}
