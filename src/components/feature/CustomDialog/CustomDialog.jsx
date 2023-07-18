import PropTypes from 'prop-types'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'

const CustomDialog = ({
    open,
    onClose,
    title = 'Thông báo',
    message = 'Bạn cần đăng nhập để thực hiện chức năng này!',
    onConfirm,
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title"> {title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="inherit" onClick={onClose}>
                    Hủy bỏ
                </Button>
                <Button
                    variant="contained"
                    color="info"
                    onClick={onConfirm}
                    autoFocus
                >
                    Đồng ý
                </Button>
            </DialogActions>
        </Dialog>
    )
}

CustomDialog.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
}

export default CustomDialog
