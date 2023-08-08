import { configureStore, combineReducers } from '@reduxjs/toolkit'
import UsersReducer from './reducers/users'
import AlertsReducer from './reducers/Alerts'

export const reducers = combineReducers({
    // Add reducers here
    user: UsersReducer,
    alert: AlertsReducer,
})

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
