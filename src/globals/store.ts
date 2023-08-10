import { configureStore, combineReducers } from '@reduxjs/toolkit'
import AuthReducer from './reducers/auth'
import AlertsReducer from './reducers/Alerts'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const createNoopStorage = () => {
    return {
        getItem(_key: string) {
            return Promise.resolve(null)
        },
        setItem(_key: string, value: string) {
            return Promise.resolve(value)
        },
        removeItem(_key: string) {
            return Promise.resolve()
        },
    }
}

const storage =
    typeof window !== 'undefined'
        ? createWebStorage('local')
        : createNoopStorage()

const rootPersistConfig = {
    key: 'root',
    storage,
    // blacklist: ['geoLocation'],
}

export const rootReducer = combineReducers({
    // Add reducers here
    auth: AuthReducer,
    alert: AlertsReducer,
})
const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
