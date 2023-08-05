import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'
import ProtectedLayout from '@/layouts/ProtectedLayout'

import { Error, Home, SignIn, SignUp } from './const'
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
        ],
    },
    {
        element: <NoHeaderLayout />,
        children: [
            {
                path: 'settings',
                element: <div>Page</div>,
            },
        ],
    },
])

export default router
