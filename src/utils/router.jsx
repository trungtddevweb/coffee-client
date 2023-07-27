import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'
import ProtectedLayout from '@/layouts/ProtectedLayout'

import {
    Error,
    Home,
    SignIn,
    SignUp,
    TagName,
    DetailPost,
    postLoader,
    getRecentLoader,
    Recent,
    Trending,
    Write,
    Liked,
    getTrendingLoader,
    getDetailLoader,
} from './const'
import Settings from '@/pages/Settings'
import NoHeaderLayout from '@/layouts/NoHeaderLayout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'tags/:tagName',
                element: <TagName />,
                loader: postLoader,
            },
            {
                path: 'tags/:tagName/:postId',
                element: <DetailPost />,
                loader: getDetailLoader,
            },
            {
                path: 'trending',
                element: <Trending />,
                loader: getTrendingLoader,
            },
            {
                path: 'recent',
                element: <Recent />,
                loader: getRecentLoader,
            },
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: 'sign-up',
                element: <SignUp />,
            },
            {
                path: 'sign-in',
                element: <SignIn />,
            },
        ],
    },
    {
        element: <ProtectedLayout />,
        children: [
            {
                path: 'manager/:username',
                element: <div>Setting</div>,
            },
            {
                path: 'store/saved',
                element: <Liked />,
            },
            {
                path: 'write',
                element: <Write />,
            },
        ],
    },
    {
        element: <NoHeaderLayout />,
        children: [
            {
                path: 'settings',
                element: <Settings />,
            },
        ],
    },
])

export default router
