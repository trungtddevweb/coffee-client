import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from '@/layouts/AuthLayout'
import MainLayout from '@/layouts/MainLayout'
import ProtectedLayout from '@/layouts/ProtectedLayout'

import Error from '@/pages/Error'
import Home from '@/pages/Home'
import SignUp from '@/pages/SignUp'
import SignIn from '@/pages/SignIn'

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'invoices',
                element: <div>Invoices</div>,
            },
            {
                path: 'contact',
                element: <div>Contact</div>,
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
                element: <div>Quản lý</div>,
            },
        ],
    },
])

export default router
