import PropTypes from 'prop-types'

const ErrorBoundary = ({ error }) => {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: 'red' }}>{error.message}</pre>
        </div>
    )
}

ErrorBoundary.propTypes = {
    error: PropTypes.object.isRequired,
}

export default ErrorBoundary
