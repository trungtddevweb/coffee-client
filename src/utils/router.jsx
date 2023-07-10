import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'
import ProtectedLayout from '@/layouts/ProtectedLayout'

import { Error, Home, SignIn, SignUp, TagName, DetailPost } from './const'

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                index: true,
                element: <Home />,
            },
            {
                path: 'tags',
                element: <div>All tags</div>,
            },
            {
                path: 'tags/:tagName',
                element: <TagName />,
            },
            {
                path: 'tags/:tagName/:postId',
                element: <DetailPost />,
            },
        ],
    },
    {
        element: <AuthLayout />,
        errorElement: <Error />,
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
        errorElement: <Error />,
        children: [
            {
                path: 'manager/:username',
                element: <Home />,
            },
        ],
    },
])

export default router
