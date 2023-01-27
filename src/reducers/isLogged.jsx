import { createSlice } from "@reduxjs/toolkit"

const loggedSlice = createSlice({
    name: 'userLogin',
    initialState: false,
    reducers: {
        login(state, action){
            return !state
        },
        logout(state, action){
            return !state
        }
    }
})

export const { login, logout } = loggedSlice.actions
export default loggedSlice.reducer