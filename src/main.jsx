import React from 'react'
import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from '@/redux/store'
import { ErrorBoundary } from 'react-error-boundary'
import { CssBaseline } from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ToastContainer } from 'react-toastify'
import 'dayjs/locale/vi'

import './index.css'
import App from './App'
import theme from '@/theme/theme'
import { Error, clientId } from '@/utils/const'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <HelmetProvider>
                    <ErrorBoundary FallbackComponent={<Error />}>
                        <CssVarsProvider theme={theme}>
                            <GoogleOAuthProvider clientId={clientId}>
                                <CssBaseline />
                                <App />
                                <ToastContainer
                                    position="top-right"
                                    limit={5}
                                />
                            </GoogleOAuthProvider>
                        </CssVarsProvider>
                    </ErrorBoundary>
                </HelmetProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
