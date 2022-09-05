import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
    user: JSON.parse(localStorage.getItem('currentuser')),
}

const userSlice = createSlice({
    name: 'currentuser',
    initialState,
})

export default userSlice.reducer