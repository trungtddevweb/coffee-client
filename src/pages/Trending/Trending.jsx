import CardItem from '@/components/common/CardItem'
import { Box, Stack, Typography } from '@mui/material'
import { useLoaderData } from 'react-router-dom'

const Trending = () => {
    const loader = useLoaderData()
    const posts = loader.data.docs

    if (posts.length === 0) {
        return (
            <Box className="p-2">
                <Typography variant="body1">Chưa có bài viết nào</Typography>
            </Box>
        )
    }

    return (
        <Box className="p-2">
            <Stack spacing={1}>
                {posts.map((post) => (
                    <CardItem key={post._id} post={post} />
                ))}
            </Stack>
        </Box>
    )
}

export default Trending
