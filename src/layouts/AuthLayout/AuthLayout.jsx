import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AuthLayout = () => {
    const checkLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    if (checkLoggedIn) return <Navigate to="/" replace />

    return <Outlet />
}

export default AuthLayout
