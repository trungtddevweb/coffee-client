import { Fragment, useState } from 'react'
import {
    Bookmark,
    CalendarMonth,
    Favorite,
    FavoriteBorder,
    KeyboardArrowUp,
    Message,
    Person2,
} from '@mui/icons-material'
import {
    Box,
    Breadcrumbs,
    Divider,
    Fab,
    IconButton,
    Link as LinkMUI,
    Stack,
    Typography,
} from '@mui/material'
import Image from 'mui-image'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'

import ScrollToTop from '@/components/common/ScollToTop'
import Seo from '@/components/feature/Seo'
import { useSelector } from 'react-redux'
import { toggleLikePostAPI } from '@/api/main'
import { formatDate, formatTagNames } from '@/utils/format'
import CustomDialog from '@/components/feature/CustomDialog'
import useStyles from '@/assets/styles'

const DetailPost = () => {
    const params = useParams()
    const loader = useLoaderData()
    const userId = useSelector((state) => state.auth.user.userId)
    const accessToken = useSelector((state) => state.auth.user.accessToken)
    const navigate = useNavigate()
    const classes = useStyles()
    const {
        author,
        comments,
        content,
        createdAt,
        likes,
        tag,
        title,
        imagesUrl,
    } = loader.data

    // State
    const isLike = likes.includes(userId)
    const [liked, setLiked] = useState(isLike)
    const [like, setLike] = useState(likes)
    const [open, setOpen] = useState(false)

    const handleLike = async () => {
        if (accessToken) {
            try {
                const res = await toggleLikePostAPI(params.postId, accessToken)
                if (res.status === 'Success') {
                    setLike(res.data.likes)
                }
                setLiked(!liked)
            } catch (error) {
                console.log(error)
            }
        } else {
            setOpen(true)
        }
    }

    // Modal
    const handleClose = () => {
        setOpen(false)
    }

    const onConfirm = () => {
        navigate('/sign-in')
    }

    return (
        <Fragment>
            <Seo
                title={title}
                description="Nơi chia sẻ những khoảnh khắc https://facebook.com/trung02032001"
                type="webapp"
                name={title}
            />
            <Box>
                <Breadcrumbs className="py-2" id="back-to-top-anchor">
                    <LinkMUI
                        component={Link}
                        underline="hover"
                        color="inherit"
                        to="/"
                        className={classes.breadcrumbs}
                    >
                        Trang chủ
                    </LinkMUI>
                    <LinkMUI
                        component={Link}
                        underline="hover"
                        color="inherit"
                        className={classes.breadcrumbs}
                        to={`/tags/${params.tagName}`}
                    >
                        {formatTagNames(params.tagName)}
                    </LinkMUI>
                    <Typography color="primary" className={classes.breadcrumbs}>
                        Chi tiết
                    </Typography>
                </Breadcrumbs>
                <Box>
                    <Image src={imagesUrl} alt={title} height={200} />
                    <Box className="p-2">
                        <Stack
                            direction="row"
                            className="py-2 justify-between mb-1"
                        >
                            <Stack direction="row">
                                <CalendarMonth
                                    color="disabled"
                                    fontSize="small"
                                />
                                <Typography
                                    color="GrayText"
                                    variant="subtitle2"
                                >
                                    {formatDate(createdAt)}
                                </Typography>
                                <Typography
                                    color="GrayText"
                                    variant="subtitle2"
                                    ml={1}
                                >
                                    | #tag: {formatTagNames(tag)}
                                </Typography>
                            </Stack>
                            <Stack direction="row">
                                <Person2 color="disabled" fontSize="small" />
                                <Typography
                                    color="GrayText"
                                    variant="subtitle2"
                                >
                                    {author.name}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Typography variant="body1" fontWeight={600} py={1}>
                            {title}
                        </Typography>
                        <Divider
                            component="div"
                            variant="fullWidth"
                            sx={{ height: '3px' }}
                        />
                        <Typography
                            className="py-2"
                            variant="body1"
                            paragraph
                            textAlign="justify"
                        >
                            {content}
                        </Typography>
                    </Box>

                    <Divider component="div" />
                    <Box className="flex items-center justify-around">
                        <Stack direction="row" alignItems="center">
                            <IconButton onClick={handleLike}>
                                {liked ? (
                                    <Favorite color="error" />
                                ) : (
                                    <FavoriteBorder />
                                )}
                            </IconButton>
                            <Typography variant="subtitle2">
                                {like.length} lượt thích
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <IconButton onClick={handleLike}>
                                <Message />
                            </IconButton>
                            <Typography variant="subtitle2">
                                {comments.length} bình luận
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <IconButton onClick={handleLike}>
                                <Bookmark />
                            </IconButton>
                            <Typography variant="subtitle2">
                                Lưu bài viết
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
                <ScrollToTop>
                    <Fab
                        color="primary"
                        size="small"
                        aria-label="scroll back to top"
                    >
                        <KeyboardArrowUp />
                    </Fab>
                </ScrollToTop>
            </Box>
            <CustomDialog
                open={open}
                onClose={handleClose}
                onConfirm={onConfirm}
            />
        </Fragment>
    )
}

export default DetailPost
