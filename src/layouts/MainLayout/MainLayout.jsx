import { Outlet } from 'react-router-dom'
import Header from '@/layouts/components/Header'
import Footer from '@/layouts/components/Footer'

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="my-2">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout
