import {
    Box,
    Button,
    FormControl,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
    useColorScheme,
} from '@mui/material'
import ReactQuill from 'react-quill'
import { MuiFileInput } from 'mui-file-input'
import { useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import 'react-quill/dist/quill.snow.css'

import background from '@/assets/images/write.jpg'
import { showToast } from '@/redux/toastSlice'
import { createdPostAPI } from '@/api/main'
import { formats, listTags, modules } from '@/utils/const'
import Seo from '@/components/feature/Seo'
import ToolbarQuill from '@/components/feature/ToolbarQuill'
import CustomDialog from '@/components/feature/CustomDialog'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
}

const Write = () => {
    const { mode } = useColorScheme()
    const dispatch = useDispatch()
    const initialState = {
        title: '',
        tag: '',
    }
    const [value, setValue] = useState(initialState)
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    // Handlers
    const handleChange = (e) => {
        const { name, value } = e.target
        setValue((prev) => ({ ...prev, [name]: value }))
    }

    const handleChooseImage = (newValue) => {
        setImage(newValue)
    }

    const handleClose = () => {
        setOpen(false)
    }

    // Submit
    const createPost = async () => {
        const formData = new FormData()
        formData.append('title', value.title)
        formData.append('tag', value.tag)
        formData.append('content', content)
        formData.append('image', image)
        try {
            setLoading(true)
            const response = await createdPostAPI(formData)
            if (response.status === 201) {
                setOpen(true)
                setLoading(false)
                setValue(initialState)
                setImage(null)
                setContent(' ')
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
            return dispatch(
                showToast({
                    type: 'error',
                    message: 'Có lỗi trong quá trình xử lý',
                })
            )
        }
    }

    const createDraftPost = async () => {
        const formData = new FormData()
        formData.append('title', value.title)
        formData.append('tag', value.tag)
        formData.append('content', content)
        formData.append('image', image)
        formData.append('draft', true)

        try {
            setLoading(true)

            const response = await createdPostAPI(formData)
            if (response.status === 201) {
                dispatch(
                    showToast({
                        type: 'success',
                        message: 'Đã lưu bài viết vào nháp.',
                    })
                )
                setLoading(false)
                setValue(initialState)
                setImage(null)
                setContent(' ')
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
            return dispatch(
                showToast({
                    type: 'error',
                    message: 'Có lỗi trong quá trình xử lý',
                })
            )
        }
    }

    return (
        <Fragment>
            <Seo
                title="Coffee Sweet | Viết bài"
                description="Tạo bài viết"
                name="Coffee Sweet"
                type="webapp"
            />
            <Box
                sx={{
                    pt: 5,
                    px: 2,
                    height: '100vh',
                    background: mode === 'dark' && `url(${background})`,
                }}
            >
                <Box component="form" className="py-4">
                    <Stack spacing={4}>
                        <FormControl fullWidth>
                            <Typography
                                component="label"
                                htmlFor="choose-title"
                                color="primary"
                                variant="subtitle2"
                                fontWeight={600}
                            >
                                Đặt tiêu đề
                            </Typography>
                            <TextField
                                id="choose-title"
                                name="title"
                                value={value.title}
                                onChange={handleChange}
                                variant="standard"
                                required
                                sx={{
                                    color: 'white',
                                }}
                            />
                        </FormControl>
                        <Box>
                            <ToolbarQuill />
                            <ReactQuill
                                theme="snow"
                                value={content}
                                onChange={setContent}
                                formats={formats}
                                modules={modules}
                            />
                        </Box>

                        <Box>
                            <Typography
                                component="label"
                                color="primary"
                                variant="subtitle2"
                                fontWeight={600}
                            >
                                Chọn ảnh và tag
                            </Typography>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                            >
                                <MuiFileInput
                                    required
                                    placeholder="Chọn ảnh"
                                    value={image}
                                    onChange={handleChooseImage}
                                    variant="standard"
                                    size="small"
                                />
                                <FormControl fullWidth>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        name="tag"
                                        value={value.tag}
                                        label="Chọn tag"
                                        MenuProps={MenuProps}
                                        onChange={handleChange}
                                        required
                                        variant="standard"
                                        size="small"
                                        defaultValue="Chia sẻ"
                                    >
                                        {listTags.map((item) => (
                                            <MenuItem
                                                key={item.value}
                                                value={item.value}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Box>
                        <Stack direction="row" spacing={1} alignSelf="flex-end">
                            <Button
                                disabled={
                                    value.title === '' ||
                                    content === '' ||
                                    value.tag === '' ||
                                    image === null ||
                                    loading === true
                                }
                                variant="outlined"
                                color="success"
                                onClick={createDraftPost}
                            >
                                Lưu vào nháp
                            </Button>
                            <Button
                                onClick={createPost}
                                variant="contained"
                                color="info"
                                disabled={
                                    value.title === '' ||
                                    content === '' ||
                                    value.tag === '' ||
                                    image === null ||
                                    loading === true
                                }
                            >
                                Đăng bài
                            </Button>
                        </Stack>
                        <Typography
                            color={mode === 'dark' ? 'lightgray' : 'black'}
                            variant="caption"
                            fontWeight="bold"
                            fontStyle="italic"
                            className="mt-2"
                        >
                            *Lưu ý: Hãy điền đủ tất cả các trường thông tin!
                        </Typography>
                    </Stack>
                </Box>
                <CustomDialog
                    open={open}
                    onClose={handleClose}
                    title="Thông báo"
                    message="Bài viết của bạn đã được gửi cho quản trị viên. Cảm ơn bạn đã viết bài ❤️"
                    onConfirm={handleClose}
                />
            </Box>
        </Fragment>
    )
}

export default Write
