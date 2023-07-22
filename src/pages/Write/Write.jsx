import ToolbarQuill from '@/components/feature/ToolbarQuill'
import { formats, listTags, modules } from '@/utils/const'
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { MuiFileInput } from 'mui-file-input'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

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
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState({
        title: '',
        tag: '',
    })
    const [image, setImage] = useState(null)
    const obSubmit = async (e) => {
        e.preventDefault()
    }

    const [content, setContent] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setValue((prev) => ({ ...prev, [name]: value }))
    }

    const handleChooseImage = (newValue, info) => {
        setImage(newValue)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <Box component="form" className="py-4">
            <Stack className="p-2">
                <Typography
                    variant="subtitle2"
                    color="primary"
                    fontWeight={600}
                >
                    Chọn hình ảnh
                </Typography>
                <MuiFileInput
                    required
                    placeholder="Chọn file ảnh"
                    value={image}
                    onChange={handleChooseImage}
                />
            </Stack>
            <Stack spacing={2}>
                <Box className="p-2">
                    <FormControl fullWidth>
                        <TextField
                            name="title"
                            value={value.title}
                            onChange={handleChange}
                            variant="standard"
                            label="Tiêu đề"
                        />
                    </FormControl>
                </Box>
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
                <Box className="p-4">
                    <FormControl fullWidth>
                        <InputLabel id="demo-controlled-open-select-label">
                            Chọn tag
                        </InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            name="tag"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={value.tag}
                            label="Chọn tag"
                            MenuProps={MenuProps}
                            onChange={handleChange}
                            required
                        >
                            {listTags.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
        </Box>
    )
}

export default Write
