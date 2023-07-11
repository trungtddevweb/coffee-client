import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'
import ProtectedLayout from '@/layouts/ProtectedLayout'

import { Error, Home, SignIn, SignUp, TagName, DetailPost } from './const'
import Breadcrumbs from '@/components/common/Breadcumbs'

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
            },
            {
                path: 'tags/:tagName/:postId',
                element: <DetailPost />,
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
                element: <Home />,
            },
        ],
    },
])

export default router
