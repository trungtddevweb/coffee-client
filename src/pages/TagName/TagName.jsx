import CardItem from '@/components/common/CardItem'
import { Box, Stack, Typography } from '@mui/material'
import { useLoaderData } from 'react-router-dom'

const TagName = () => {
    const loader = useLoaderData()
    const posts = loader.data.docs

    return (
        <Box className="p-2">
            {posts.length === 0 ? (
                <Box className="p-2">
                    <Typography variant="body1">
                        Chưa có bài viết nào
                    </Typography>
                </Box>
            ) : (
                <Stack spacing={1}>
                    {posts.map((post) => (
                        <CardItem key={post._id} post={post} />
                    ))}
                </Stack>
            )}
        </Box>
    )
}

export default TagName
