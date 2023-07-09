import { Outlet } from 'react-router-dom'
import Header from '@/layouts/components/Header'
import Footer from '@/layouts/components/Footer'

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="mt-14 mb-4">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout
