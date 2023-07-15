import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import router from '@/utils/router'
import SpinnerAnimation from './components/fallback/Spinner'

function App() {
    return (
        <Suspense fallback={<SpinnerAnimation />}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default App
