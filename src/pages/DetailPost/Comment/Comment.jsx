import PropTypes from 'prop-types'
import { useState } from 'react'
import {
    Avatar,
    Box,
    FormControl,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { createCommentAPI } from '@/api/main'
import { ThumbUpAlt } from '@mui/icons-material'
import useStyles from '@/assets/styles'

const Comment = ({ comments, postId, setComments }) => {
    dayjs.extend(relativeTime)
    const classes = useStyles()
    const user = useSelector((state) => state.auth.user)
    const { accessToken, avtUrl, name, userId } = user
    const post = comments.map((comment) => comment.likes)
    const isLikedComment = post.includes(userId)
    const [like, setLike] = useState(isLikedComment)
    const [commentVal, setCommentVal] = useState('')
    const handleLikeComment = () => {
        setLike(!like)
    }

    const handleComment = async (e) => {
        e.preventDefault()
        const trimmedValue = commentVal.trim()
        if (trimmedValue === '') {
            return
        }
        const response = await createCommentAPI(
            {
                content: trimmedValue,
                postId,
            },
            accessToken
        )
        if (response.status === 'Success') {
            setComments([...comments, response.data])
            setCommentVal(' ')
        }
    }

    return (
        <Box className="p-2">
            {accessToken && (
                <Box component="form" onSubmit={handleComment} className="py-2">
                    <Stack direction="row" spacing={1}>
                        <Avatar
                            src={avtUrl}
                            sx={{
                                width: 30,
                                height: 30,
                            }}
                            alt="avt"
                        />
                        <FormControl fullWidth>
                            <TextField
                                size="small"
                                placeholder="Nhập bình luận..."
                                variant="standard"
                                value={commentVal}
                                onChange={(e) => setCommentVal(e.target.value)}
                            />
                        </FormControl>
                    </Stack>
                </Box>
            )}
            {comments.length !== 0 ? (
                <Box className="py-2">
                    {comments.map((comment) => (
                        <Box key={comment._id} py={0.5}>
                            <Stack direction="row" spacing={1}>
                                <Avatar
                                    sx={{
                                        width: 30,
                                        height: 30,
                                    }}
                                    src={comment.userId.avtUrl || avtUrl}
                                    alt={comment.userId.name}
                                />
                                <Stack spacing={0.5}>
                                    <Paper elevation={3} className="p-2">
                                        <Typography
                                            variant="subtitle2"
                                            fontWeight={600}
                                        >
                                            {comment.userId.name || name}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            {comment.content}
                                        </Typography>
                                    </Paper>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                    >
                                        <Stack direction="row" spacing={2}>
                                            <Typography variant="caption">
                                                {dayjs(comment.createdAt)
                                                    .locale('vi')
                                                    .fromNow()}
                                            </Typography>
                                            <Typography
                                                onClick={handleLikeComment}
                                                color={like && 'blue'}
                                                variant="caption"
                                            >
                                                Thích
                                            </Typography>
                                            <Typography variant="caption">
                                                Trả lời
                                            </Typography>
                                        </Stack>
                                        {comment.likes.length > 0 && (
                                            <Stack direction="row" gap={0.5}>
                                                <Typography variant="caption">
                                                    {comment.likes.length}
                                                </Typography>
                                                <Box
                                                    bgcolor="blue"
                                                    borderRadius="50%"
                                                    width={16}
                                                    height={16}
                                                    className={classes.flexBox}
                                                >
                                                    <ThumbUpAlt
                                                        sx={{
                                                            width: 12,
                                                            height: 12,
                                                        }}
                                                    />
                                                </Box>
                                            </Stack>
                                        )}
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    ))}
                </Box>
            ) : (
                <Typography className="py-2" variant="body2">
                    Chưa có bình luận nào.
                </Typography>
            )}
        </Box>
    )
}

Comment.propTypes = {
    comments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired,
    setComments: PropTypes.func.isRequired,
}

export default Comment
