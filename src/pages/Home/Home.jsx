import { Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { showToast } from '@/redux/toastSlice'

import RecentPosts from './RecentPosts'

const Home = () => {
    const dispatch = useDispatch()

    return (
        <Box className="px-2    ">
            <RecentPosts />
            <Button
                onClick={() => {
                    dispatch(showToast({ type: 'success', message: 'Success' }))
                }}
            >
                Show toast
            </Button>
        </Box>
    )
}

export default Home
