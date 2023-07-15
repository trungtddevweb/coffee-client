import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from '@/layouts/components/Header'
import Footer from '@/layouts/components/Footer'
import { Suspense } from 'react'
import SpinnerAnimation from '@/components/fallback/Spinner/SpinnerAnimation'

export default function MainLayout() {
    return (
        <>
            <Header />
            <main className="mt-14 mb-4 min-h-screen">
                <Suspense fallback={<SpinnerAnimation />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
            <ScrollRestoration />
        </>
    )
}
