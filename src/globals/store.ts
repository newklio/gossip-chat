import { configureStore, combineReducers } from '@reduxjs/toolkit'
import AuthReducer from './reducers/auth'
import AlertsReducer from './reducers/Alerts'

export const reducers = combineReducers({
    // Add reducers here
    auth: AuthReducer,
    alert: AlertsReducer,
})

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
