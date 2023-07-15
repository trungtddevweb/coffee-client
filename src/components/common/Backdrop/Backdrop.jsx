import PropTypes from 'prop-types'
import { Backdrop as BackdropMUI, CircularProgress } from '@mui/material'

const Backdrop = ({ open }) => {
    return (
        <BackdropMUI
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </BackdropMUI>
    )
}

Backdrop.propTypes = {
    open: PropTypes.bool.isRequired,
}

export default Backdrop
