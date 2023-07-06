import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const TypeErrorMsg = ({ message }) => {
    return (
        <Typography color="error" variant="subtitle2" fontStyle="italic">
            {message}
        </Typography>
    )
}

TypeErrorMsg.propTypes = {
    message: PropTypes.string.isRequired,
}

export default TypeErrorMsg
