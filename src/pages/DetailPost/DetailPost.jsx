import { formatDate, formatTagNames } from '@/utils/format'
import { CalendarMonth, KeyboardArrowUp, Person2 } from '@mui/icons-material'
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
import { Fragment } from 'react'
import Seo from '@/components/feature/Seo'

const DetailPost = () => {
    const loader = useLoaderData()
    const {
        author,
        comment,
        content,
        createdAt,
        likes,
        tag,
        title,
        imagesUrl,
    } = loader.data
    const params = useParams()
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
                    >
                        Trang chủ
                    </LinkMUI>
                    <LinkMUI
                        component={Link}
                        underline="hover"
                        color="inherit"
                        to={`/tags/${params.tagName}`}
                    >
                        {formatTagNames(params.tagName)}
                    </LinkMUI>
                    <Typography color="primary">Chi tiết</Typography>
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
                            {content}
                        </Typography>
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
        </Fragment>
    )
}

export default DetailPost
