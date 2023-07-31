import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, ScrollRestoration } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SpinnerAnimation from '@/components/fallback/Spinner'

const ProtectedLayout = () => {
    const checkLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const accessToken = useSelector((state) => state.auth.user.accessToken)
    if (!checkLoggedIn || !accessToken) {
        return <Navigate to="/sign-in" replace />
    }
    return (
        <>
            <Header />
            <main className="mt-14 min-h-screen">
                <Suspense fallback={<SpinnerAnimation />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default ProtectedLayout
