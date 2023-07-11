import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SpinnerAnimation from '@/components/fallback/Spinner'

const ProtectedLayout = () => {
    const checkLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    if (!checkLoggedIn) return <Navigate to="/sign-in" replace />

    return (
        <>
            <Header />
            <main className="mt-14 mb-4">
                <Suspense fallback={<SpinnerAnimation />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}

export default ProtectedLayout
