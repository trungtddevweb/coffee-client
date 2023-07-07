import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AuthLayout = () => {
    const checkLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    if (checkLoggedIn) return <Navigate to="/" replace />

    return (
        <Box className="bg-auth bg-gray-900/60 bg-blend-overlay">
            <Outlet />
        </Box>
    )
}

export default AuthLayout
