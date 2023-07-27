import { lazy, Fragment } from 'react'
import { ArrowBackIos } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Seo from '@/components/feature/Seo'
const MenuSetting = lazy(() => import('./MenuSetting'))

const Setting = () => {
    const navigate = useNavigate()

    return (
        <Fragment>
            <Seo
                description="Cài đặt"
                name="Cài đặt coffee-sweet"
                title="Cài đặt"
            />
            <Box>
                <Box className="relative">
                    <Typography
                        py={2}
                        component="div"
                        textAlign="center"
                        variant="h6"
                    >
                        <Box
                            onClick={() => navigate(-1)}
                            className="absolute left-2 "
                        >
                            <ArrowBackIos />
                        </Box>
                        Cài đặt tài khoản
                    </Typography>
                </Box>
                <Box className="mt-16">
                    <MenuSetting />
                </Box>
            </Box>
        </Fragment>
    )
}

export default Setting
