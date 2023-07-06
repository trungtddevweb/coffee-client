import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from '@/redux/store'
import { ErrorBoundary } from 'react-error-boundary'
import { CssBaseline } from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { GoogleOAuthProvider } from '@react-oauth/google'

import './index.css'
import App from './App'
import * as Fallback from '@/components/fallback/Spinner'
import SpinnerAnimation from '@/components/fallback/Spinner'
import theme from '@/theme/theme'
import { clientId } from '@/utils/const'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ErrorBoundary FallbackComponent={Fallback}>
                    <CssVarsProvider theme={theme}>
                        <GoogleOAuthProvider clientId={clientId}>
                            <Suspense fallback={<SpinnerAnimation />}>
                                <CssBaseline />
                                <App />
                            </Suspense>
                        </GoogleOAuthProvider>
                    </CssVarsProvider>
                </ErrorBoundary>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
