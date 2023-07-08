import PropTypes from 'prop-types'
import { Slide, useScrollTrigger } from '@material-ui/core'

const HideOnScroll = ({ children }) => {
    const trigger = useScrollTrigger()

    return (
        <Slide appear={true} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
}

export default HideOnScroll
