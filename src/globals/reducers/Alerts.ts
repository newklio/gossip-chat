import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AlertColor } from '@mui/material'

export interface AlertState {
    message: string
    severity: AlertColor
    open: boolean
}

const initialState: AlertState = {
    message: 'This is an info message',
    severity: 'info',
    open: false,
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert: (state, action: PayloadAction<Omit<AlertState, 'open'>>) => {
            state.message = action.payload.message
            state.severity = action.payload.severity
            state.open = true
        },
        closeAlert: (state) => {
            state.open = false
            state.message = initialState.message
            state.severity = initialState.severity
        },
    },
})

export const { setAlert, closeAlert } = alertSlice.actions

export const selectAlert = (state: RootState) => state.alert

export default alertSlice.reducer
