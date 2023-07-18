import SpinnerAnimation from '@/components/fallback/Spinner/SpinnerAnimation'
import { Box } from '@mui/material'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, ScrollRestoration } from 'react-router-dom'

const AuthLayout = () => {
    const checkLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const accessToken = useSelector((state) => state.auth.user.accessToken)

    if (checkLoggedIn && accessToken) return <Navigate to="/" replace />

    return (
        <Suspense fallback={<SpinnerAnimation />}>
            <Box className="bg-auth bg-gray-900/60 bg-blend-overlay">
                <Outlet />
            </Box>
            <ScrollRestoration />
        </Suspense>
    )
}

export default AuthLayout
