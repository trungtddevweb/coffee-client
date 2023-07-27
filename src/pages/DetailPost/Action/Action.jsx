import PropTypes from 'prop-types'
import { Fragment } from 'react'
import {
    Bookmark,
    BookmarkAdded,
    Favorite,
    FavoriteBorder,
    Message,
} from '@mui/icons-material'
import { Box, IconButton, Stack, Typography } from '@mui/material'

import CustomDialog from '@/components/feature/CustomDialog'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPostToSaveAPI, toggleLikePostAPI } from '@/api/main'
import { useState } from 'react'
import { addSavedPosts } from '@/redux/userSlice'

const Action = ({ likes, postId, comments }) => {
    // State
    const userId = useSelector((state) => state.auth.user.userId)
    const accessToken = useSelector((state) => state.auth.user.accessToken)
    const postSaved = useSelector((state) => state.auth.postSaved)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isLike = likes.includes(userId)
    const isSaved = postSaved?.includes(postId)
    const [save, setSave] = useState(isSaved)
    const [liked, setLiked] = useState(isLike)
    const [like, setLike] = useState(likes)
    const [open, setOpen] = useState(false)

    // Handlers
    const handleLike = async () => {
        if (accessToken) {
            try {
                const res = await toggleLikePostAPI(postId)
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
    const handleSavePost = async () => {
        if (accessToken) {
            const res = await addPostToSaveAPI(postId)
            if (res.status === 'Success') {
                setSave(true)
                dispatch(addSavedPosts(res.data))
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
            <Box className="flex items-center justify-around">
                <Stack direction="row" alignItems="center">
                    <IconButton onClick={handleLike}>
                        {liked ? (
                            <Favorite color="error" />
                        ) : (
                            <FavoriteBorder />
                        )}
                    </IconButton>
                    <Typography color={liked && 'error'} variant="subtitle2">
                        {like.length} lượt thích
                    </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                    <IconButton>
                        <Message />
                    </IconButton>
                    <Typography variant="subtitle2">
                        {comments.length} bình luận
                    </Typography>
                </Stack>
                {save ? (
                    <Stack direction="row" alignItems="center">
                        <IconButton>
                            <BookmarkAdded color="info" />
                        </IconButton>
                        <Typography color="lightblue" variant="subtitle2">
                            Đã lưu
                        </Typography>
                    </Stack>
                ) : (
                    <Stack
                        direction="row"
                        alignItems="center"
                        onClick={handleSavePost}
                    >
                        <IconButton>
                            <Bookmark />
                        </IconButton>
                        <Typography variant="subtitle2">
                            Lưu bài viết
                        </Typography>
                    </Stack>
                )}
            </Box>
            <CustomDialog
                open={open}
                onClose={handleClose}
                onConfirm={onConfirm}
            />
        </Fragment>
    )
}

Action.propTypes = {
    likes: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
}

export default Action
