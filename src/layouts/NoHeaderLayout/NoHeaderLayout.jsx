import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, ScrollRestoration } from 'react-router-dom'
import SpinnerAnimation from '@/components/fallback/Spinner/SpinnerAnimation'

const NoHeaderLayout = () => {
    const checkLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const accessToken = useSelector((state) => state.auth.user.accessToken)
    if (!checkLoggedIn || !accessToken)
        return <Navigate to="/sign-in" replace />

    return (
        <>
            <Suspense fallback={<SpinnerAnimation />}>
                <Outlet />
                <ScrollRestoration />
            </Suspense>
        </>
    )
}

export default NoHeaderLayout
