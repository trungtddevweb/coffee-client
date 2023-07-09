import { Copyright } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box component="footer">
            <Typography
                component="div"
                variant="subtitle2"
                textAlign="center"
                bgcolor="GrayText"
                py={1}
            >
                Mọi bản quyền thuộc về <Copyright />
                <strong>Coffee Sweet</strong>. Develop by TranTrung!
            </Typography>
        </Box>
    )
}

export default Footer
