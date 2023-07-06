import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    return <div>Error: {error.statusText}</div>
}

export default Error
