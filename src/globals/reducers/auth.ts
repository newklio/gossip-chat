import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { User } from '@gossip/types/users'

export interface Auth {
    authenticated: boolean
    token?: string
    user: User
}

const initialState: Auth = {
    authenticated: false,
    token: undefined,
    user: {} as User,
}

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<Omit<Auth, 'authenticated'>>) => {
            state.authenticated = true
            state.token = action.payload.token
            state.user = action.payload.user
        },
        logout: (state) => {
            state.authenticated = initialState.authenticated
            state.token = initialState.token
            state.user = initialState.user
        },
    },
})

export const { login, logout } = userSlice.actions
export const selectAuth = (state: RootState) => state.auth

export default userSlice.reducer
