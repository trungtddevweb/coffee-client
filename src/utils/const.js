import { getAllPostAPI, getPostByTagAPI } from '@/api/main'
import { lazy } from 'react'

export const clientId = import.meta.env.VITE_APP_CLIENTID_KEY
export const appID = import.meta.env.VITE_APP_APPID_FACEBOOK

// Routers
export const Error = lazy(() => import('@/pages/Error'))
export const Home = lazy(() => import('@/pages/Home'))
export const SignIn = lazy(() => import('@/pages/SignIn'))
export const SignUp = lazy(() => import('@/pages/SignUp'))
export const TagName = lazy(() => import('@/pages/TagName'))
export const DetailPost = lazy(() => import('@/pages/DetailPost'))
export const Trending = lazy(() => import('@/pages/Trending'))
export const Write = lazy(() => import('@/pages/Write'))
export const Liked = lazy(() => import('@/pages/Liked'))
export const Recent = lazy(() => import('@/pages/Recent'))
//
export const baseURL = import.meta.env.VITE_APP_BASE_URL

// Loaders
export const postLoader = async ({ params }) => {
    const tagName = params.tagName
    const post = await getPostByTagAPI(tagName)
    return post
}

export const getRecentLoader = async () => {
    const post = await getAllPostAPI()
    return post
}
