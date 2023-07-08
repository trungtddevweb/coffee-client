import { Button } from '@mui/material'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            Đường dẫn không tồn tại: {error.statusText}
            <Link to="/">
                <Button variant="contained">Quay lại trang chủ</Button>
            </Link>
        </div>
    )
}

export default Error
