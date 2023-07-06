import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ProtectedLayout = () => {
    const checkLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    if (!checkLoggedIn) return <Navigate to="/sign-in" replace />

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default ProtectedLayout
