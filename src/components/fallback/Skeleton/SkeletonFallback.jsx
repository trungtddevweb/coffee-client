import { Box, Skeleton } from '@mui/material'

const SkeletonFallback = () => {
    return (
        <Box>
            <Skeleton variant="rectangular" height={118} />
            <Skeleton height={50} />
            <Skeleton width="80%" />
            <Skeleton width="60%" />
        </Box>
    )
}

export default SkeletonFallback
