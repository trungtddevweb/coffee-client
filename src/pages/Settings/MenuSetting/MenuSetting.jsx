import {
    ArrowForwardIos,
    BookmarkAdded,
    HistoryEdu,
    Logout,
    ManageAccounts,
    Notifications,
    Policy,
} from '@mui/icons-material'
import {
    Avatar,
    Box,
    Button,
    Divider,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Stack,
    Typography,
} from '@mui/material'
import useStyles from '@/assets/styles'
import { useDispatch, useSelector } from 'react-redux'
import { signOutAPI } from '@/api/main'
import { showToast } from '@/redux/toastSlice'
import { useState } from 'react'
import Backdrop from '@/components/common/Backdrop'
import { logoutSuccess } from '@/redux/userSlice'
import { Fragment } from 'react'

const MenuSetting = () => {
    const [loading, setLoading] = useState(false)
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const { avtUrl, name, email } = user
    const handleSignOut = async () => {
        setLoading(true)
        try {
            const response = await signOutAPI()
            if (response.status === 200) {
                dispatch(logoutSuccess())
                localStorage.removeItem('token')
            }
            setLoading(false)
        } catch (error) {
            dispatch(showToast({ type: 'error', message: 'Đã có lỗi xảy ra.' }))
            console.error(error.message)
            setLoading(false)
        }
    }

    return (
        <Fragment>
            <Box className={classes.flexBox}>
                <Stack spacing={1} className={classes.flexBox}>
                    <Avatar
                        sx={{
                            width: 80,
                            height: 80,
                        }}
                        src={avtUrl}
                        alt={name}
                    />
                    <Box className={classes.flexBox} flexDirection="column">
                        <Typography variant="h6">{name}</Typography>
                        <Typography variant="caption" color="GrayText">
                            {email}
                        </Typography>
                    </Box>
                    <Button variant="contained" endIcon={<ArrowForwardIos />}>
                        Chỉnh sửa
                    </Button>
                </Stack>
            </Box>

            <Box className={classes.flexBox} mt={5}>
                <MenuList>
                    <MenuItem
                        sx={{
                            width: 350,
                        }}
                    >
                        <ListItemIcon>
                            <ManageAccounts color="disabled" />
                        </ListItemIcon>
                        <ListItemText>Cài đặt chung</ListItemText>
                        <ArrowForwardIos />
                    </MenuItem>
                    <MenuItem
                        sx={{
                            width: 350,
                        }}
                    >
                        <ListItemIcon>
                            <Notifications color="primary" />
                        </ListItemIcon>
                        <ListItemText>Cài đặt thông báo</ListItemText>
                        <ArrowForwardIos />
                    </MenuItem>
                    <MenuItem
                        sx={{
                            width: 350,
                        }}
                    >
                        <ListItemIcon>
                            <BookmarkAdded color="info" />
                        </ListItemIcon>
                        <ListItemText>Bài viết đã lưu</ListItemText>
                        <ArrowForwardIos />
                    </MenuItem>
                    <MenuItem
                        sx={{
                            width: 350,
                        }}
                    >
                        <ListItemIcon>
                            <HistoryEdu color="warning" />
                        </ListItemIcon>
                        <ListItemText>Bài viết của tôi</ListItemText>
                        <ArrowForwardIos />
                    </MenuItem>
                    <MenuItem
                        sx={{
                            width: 350,
                        }}
                    >
                        <ListItemIcon>
                            <Policy />
                        </ListItemIcon>
                        <ListItemText>Chính sách và bảo mật</ListItemText>
                        <ArrowForwardIos />
                    </MenuItem>
                    <Divider component="div" variant="fullWidth" />
                    <MenuItem
                        sx={{
                            width: 350,
                        }}
                        onClick={handleSignOut}
                    >
                        <ListItemIcon>
                            <Logout color="error" />
                        </ListItemIcon>
                        <Typography color="error">Đăng xuất</Typography>
                    </MenuItem>
                </MenuList>
                <Backdrop open={loading} />
            </Box>
        </Fragment>
    )
}

export default MenuSetting
