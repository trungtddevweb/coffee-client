import { Fragment, lazy } from 'react'
import { Box } from '@mui/material'

const RecentPosts = lazy(() => import('./RecentPosts'))
import Seo from '@/components/feature/Seo'

const Home = () => {
    return (
        <Fragment>
            <Seo
                title="Coffee Sweet | Trang chủ"
                description="Viết lên những câu chuyện của bạn"
                type="Web Application"
                name="Coffee Sweet"
            />
            <Box className="px-2">
                <RecentPosts />
            </Box>
        </Fragment>
    )
}

export default Home
