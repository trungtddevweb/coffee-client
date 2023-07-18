import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import userSlice from './userSlice'
import toastSlice from './toastSlice'

const rootReducer = combineReducers({
    auth: userSlice,
    toast: toastSlice,
})

const persistConfig = {
    key: 'root',
    version: '1',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    devTools: import.meta.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
