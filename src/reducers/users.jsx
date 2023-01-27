import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchAllUsers = createAsyncThunk(
    'users/fetchAllUsers',
    async() =>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data
    }
)

const UsersSlice = createSlice({
    name: 'Fetch users from API',
    initialState: {
        loading: false,
        data: [],
        error: ''
    },
    reducers:{
        fetchUsers(state){
            state.loading = true
        },
        fetchUserSucced(state, action){
            state.loading = false
            state.data = action.payload
        },
        fetchUserError(state){
            state.loading = false
            state.error = 'Failed to fetch users'
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) =>{
            state.data.push(action.payload)
        })
    }
})

const { fetchUsers, fetchUserSucced, fetchUserError} = UsersSlice.actions
export default UsersSlice.reducer