import { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import CardItem from '@/components/common/CardItem'
import { Link } from 'react-router-dom'
import { getAllPostAPI } from '@/api/main'
import Skeleton from '@/components/fallback/Skeleton'

const RecentPosts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoadig] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const posts = await getAllPostAPI()
                setPosts(posts.data.docs)
                setLoadig(false)
            } catch (error) {
                console.log(error)
                setLoadig(false)
            }
        }
        fetchPost()
    }, [])

    return (
        <Box>
            <Typography
                variant="subtitle1"
                fontWeight={600}
                color="primary"
                className="py-2"
            >
                Bài viết gần đây
            </Typography>
            {loading ? (
                <Stack spacing={1}>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </Stack>
            ) : (
                <Stack spacing={1}>
                    {posts.map((post) => (
                        <CardItem key={post._id} post={post} />
                    ))}
                </Stack>
            )}
            <Typography align="center" variant="subtitle2" mt={1} color="">
                <Link to="/recent">Xem thêm</Link>
            </Typography>
        </Box>
    )
}

export default RecentPosts
