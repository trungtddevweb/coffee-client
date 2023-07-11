import { Button, Stack } from '@mui/material'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    return (
        <Stack direction="row" spacing={1}>
            Đã có lỗi xảy ra: {error.statusText || error}
            <Link to="/">
                <Button variant="contained">Quay lại trang chủ</Button>
            </Link>
        </Stack>
    )
}

export default Error
