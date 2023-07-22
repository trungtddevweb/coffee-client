import {
    getAllPostAPI,
    getPostByTagAPI,
    getPostDetailAPI,
    getPostTrendingAPI,
} from '@/api/main'
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

// Modules object for setting up the Quill editor
function undoChange() {
    this.quill.history.undo()
}
function redoChange() {
    this.quill.history.redo()
}

export const modules = {
    toolbar: {
        container: '#toolbar',
        handlers: {
            undo: undoChange,
            redo: redoChange,
        },
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
    },
}

// Formats objects for setting up the Quill editor
// Undo and redo functions for Custom Toolbar

export const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'align',
    'strike',
    'script',
    'blockquote',
    'background',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'code-block',
]

//
export const listTags = [
    {
        label: 'Âm nhạc',
        value: 'music',
    },
    {
        label: 'Công nghệ',
        value: 'technology',
    },
    {
        label: 'Tâm sự',
        value: 'sharing',
    },
    {
        label: 'Du lịch',
        value: 'traveling',
    },
    {
        label: 'Ẩm thực',
        value: 'cuisine',
    },
    {
        label: 'Làm đẹp',
        value: 'embellish',
    },
    {
        label: 'Thời trang',
        value: 'fashion',
    },
]

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

export const getTrendingLoader = async () => {
    return await getPostTrendingAPI()
}

export const getDetailLoader = async ({ params }) => {
    return await getPostDetailAPI(params.postId)
}
