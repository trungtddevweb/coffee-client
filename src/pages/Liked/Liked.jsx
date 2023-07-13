import { Box } from '@mui/material'
import { useLoaderData } from 'react-router-dom'

const Liked = () => {
    const loader = useLoaderData()
    console.log(loader)
    return <Box></Box>
}

export default Liked
