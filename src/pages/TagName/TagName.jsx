import CardItem from '@/components/common/CardItem'
import Seo from '@/components/feature/Seo'
import { formatTagNames } from '@/utils/format'
import { Box, Stack, Typography } from '@mui/material'
import { Fragment } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const TagName = () => {
    const loader = useLoaderData()
    const posts = loader.data.docs
    const params = useParams()

    return (
        <Fragment>
            <Seo title={`Coffee Sweet | ${formatTagNames(params.tagName)}`} />
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
        </Fragment>
    )
}

export default TagName
