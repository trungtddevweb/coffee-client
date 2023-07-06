import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '@/layouts/components/Header'
import Footer from '@/layouts/components/Footer'

const MainLayout = () => {
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

export default MainLayout
