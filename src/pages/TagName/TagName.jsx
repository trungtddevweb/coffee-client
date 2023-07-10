import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'

const TagName = () => {
    const { tagName } = useParams()
    return <Box>{tagName}</Box>
}

export default TagName
