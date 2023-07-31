import { Fragment, useState } from 'react'
import {
    CalendarMonth,
    KeyboardArrowUp,
    Person2,
    Sell,
} from '@mui/icons-material'
import {
    Box,
    Breadcrumbs,
    Divider,
    Fab,
    Link as LinkMUI,
    Stack,
    Typography,
} from '@mui/material'
import Image from 'mui-image'
import { Link, useLoaderData, useParams } from 'react-router-dom'

import ScrollToTop from '@/components/common/ScollToTop'
import Seo from '@/components/feature/Seo'
import { formatDate, formatTagNames } from '@/utils/format'
import useStyles from '@/assets/styles'
import Action from './Action'
import Comment from './Comment'
import DOMPurify from 'dompurify'

const DetailPost = () => {
    const params = useParams()
    const loader = useLoaderData()
    const [comments, setComments] = useState(loader.data.comments)
    const classes = useStyles()
    const { author, content, createdAt, tag, likes, title, imagesUrl } =
        loader.data

    const safeHTML = DOMPurify.sanitize(content)

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
                                    component="div"
                                >
                                    | <Sell fontSize="14px" />{' '}
                                    {formatTagNames(tag)}
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
                            textAlign="justify"
                            component="article"
                            dangerouslySetInnerHTML={{
                                __html: safeHTML,
                            }}
                        ></Typography>
                    </Box>

                    <Divider component="div" />
                    <Action
                        likes={likes}
                        postId={params.postId}
                        comments={comments}
                    />
                    <Comment
                        comments={comments}
                        postId={params.postId}
                        setComments={setComments}
                    />
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
        </Fragment>
    )
}

export default DetailPost
