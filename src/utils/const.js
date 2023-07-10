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

//
