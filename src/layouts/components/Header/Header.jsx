import PropTypes from 'prop-types'
import { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Typography,
    Badge,
    MenuItem,
    Menu,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    useColorScheme,
    Button,
    Switch,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import styled from '@emotion/styled'
import { Home, ManageAccounts } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import HideOnScroll from '../HideOnScroll'
import { navItems } from '@/utils/components'
import { Search, SearchIconWrapper, StyledInputBase } from '@/assets/styles'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff'
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === 'dark' ? '#8796A5' : '#beb2aa',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#fc6500',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff'
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}))

export default function Header(props) {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
    const drawerWidth = 240
    const { window } = props
    const { mode, setMode } = useColorScheme()
    const checkLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const [mobileOpen, setMobileOpen] = useState(false)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMenuClose = () => {
        handleMobileMenuClose()
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }
    const menuId = 'primary-search-account-menu'

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Box>
                <MenuItem>
                    <IconButton
                        aria-label="show new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error" max={9}>
                            <NotificationsIcon color="info" />
                        </Badge>
                    </IconButton>
                    <p>Thông báo</p>
                </MenuItem>
                <Link to="/settings">
                    <MenuItem onClick={handleMenuClose}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <ManageAccounts color="success" />
                        </IconButton>
                        <p>Tài khoản</p>
                    </MenuItem>
                </Link>
            </Box>
        </Menu>
    )

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ width: '100%' }}>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
                aria-label="contacts"
            >
                <Link to="/">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Home color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Trang chủ" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Divider />
                {navItems.map((item) => {
                    const { slug, icon, label } = item
                    return (
                        <Link to={slug} key={slug}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText primary={label} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    )
                })}
                {!checkLoggedIn && (
                    <ListItem>
                        <Link to="/sign-in">
                            <Button variant="contained">Đăng nhập</Button>
                        </Link>
                    </ListItem>
                )}
            </List>
        </Box>
    )

    const container =
        window !== undefined ? () => window().document.body : undefined

    return (
        <Box sx={{ flexGrow: 1 }}>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            MUI
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Tìm kiếm..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="show 4 new mails"
                                color="inherit"
                            >
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>

                        <Box>
                            <MaterialUISwitch
                                onClick={() => {
                                    setMode(mode === 'light' ? 'dark' : 'light')
                                }}
                                checked={mode === 'dark'}
                            />
                        </Box>
                        {checkLoggedIn && (
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        )}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            {renderMobileMenu}
        </Box>
    )
}

Header.propTypes = {
    window: PropTypes.func,
}
