import PropTypes from 'prop-types'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import useStyles from '@/assets/styles'
import { useNavigate } from 'react-router-dom'

const CardItem = ({ post }) => {
    const { tagName, _id } = post
    const classes = useStyles()
    const navigate = useNavigate()

    const redirect = () => {
        navigate(`/tags/${tagName}/${_id}`)
    }
    return (
        <Card onClick={redirect}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={classes.limitLines}
                    >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarcticaizards are a widespread group of
                        squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
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
