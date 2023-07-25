import PropTypes from 'prop-types'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import HTMLReactParser from 'html-react-parser'

import useStyles from '@/assets/styles'

const CardItem = ({ post }) => {
    const { tag, _id, content, imagesUrl, title } = post
    const { name } = post.author
    const classes = useStyles()
    const navigate = useNavigate()

    const redirect = () => {
        navigate(`/tags/${tag}/${_id}`)
    }
    return (
        <Card onClick={redirect}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    sx={{ maxHeight: '160px' }}
                    image={imagesUrl}
                    alt={title}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        className={classes.limitTitle}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        color="text.secondary"
                        className={classes.limitLines}
                        paragraph
                        textAlign="justify"
                    >
                        {HTMLReactParser(content)}
                    </Typography>
                    <Typography
                        color="text.secondary"
                        component="div"
                        align="right"
                        variant="caption"
                    >
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

CardItem.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CardItem
