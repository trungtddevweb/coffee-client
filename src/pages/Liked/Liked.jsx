import { getPostSavedAPI } from '@/api/main'
import CardItem from '@/components/common/CardItem'
import Skeleton from '@/components/fallback/Skeleton'
import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Liked = () => {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const accessToken = useSelector((state) => state.auth.user.accessToken)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await getPostSavedAPI(accessToken)
                setLoading(false)
                setPosts(res.data.docs)
            } catch (error) {
                console.error(error)
                setLoading(false)
            }
        }
        fetchPost()
    }, [accessToken])

    if (loading)
        return (
            <Box className="p-2">
                <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    color="primary"
                >
                    Bài viết yêu thích
                </Typography>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </Box>
        )

    return (
        <Box className="p-2">
            <Typography variant="subtitle1" fontWeight={600} color="primary">
                Bài viết yêu thích
            </Typography>
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

export default Liked
