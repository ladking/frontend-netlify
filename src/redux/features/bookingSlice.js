import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState ={
    loading: false,
    bookingDetails: [] 
}
export const bookRoom = createAsyncThunk('bookroom/bookRoom', async(details) =>{
    const result = (await axios.post('http://localhost:8000/api/bookings/bookroom', details)).data
    return result
})
 const bookSlice = createSlice({
    name: 'book',
    initialState,
    extraReducers: builder =>{
        builder.addCase(bookRoom.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(bookRoom.fulfilled, (state) =>{
            state.loading = false
            alert('paid')
        })
        builder.addCase(bookRoom.rejected, (state, action) => {
            console.log(action.error)
        })
    },
 })


export default bookSlice.reducer
