import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface User {
    uid: string
    fullname: string
    email: string
}

const initialState: User = {
    uid: '',
    fullname: '',
    email: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.uid = action.payload.uid
            state.fullname = action.payload.fullname
            state.email = action.payload.email
        },
        clearUser: (state) => {
            state.uid = ''
            state.fullname = ''
            state.email = ''
        },
    },
})

export const { setUser, clearUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
