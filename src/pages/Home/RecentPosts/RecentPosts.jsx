import { Box, Stack, Typography } from '@mui/material'
import CardItem from '@/components/common/CardItem'
import { Link } from 'react-router-dom'

const post = {
    tagName: 'trending',
    _id: '12312312hhadsasdasd',
}

const RecentPosts = () => {
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
            <Stack spacing={1}>
                <CardItem post={post} />
                <CardItem post={post} />
                <CardItem post={post} />
                <CardItem post={post} />
                <CardItem post={post} />
            </Stack>
            <Typography align="center" variant="subtitle2" mt={1} color="">
                <Link to="/tags/recent">Xem thêm</Link>
            </Typography>
        </Box>
    )
}

export default RecentPosts
