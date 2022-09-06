import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loading: false,
    response:[],
    error:'',
}

export const getbookings = createAsyncThunk('booking/getbookings', async(user_id)=>{
        const bookings = await (await axios.post('https://serene-crag-84345.herokuapp.com/api/bookings/getbookingsbyuserid', {userid: user_id})).data
        return bookings
})
export const cancelBooking = createAsyncThunk('bookings/cancelBooking', async(id) =>{
    const result = await (await axios.post('https://serene-crag-84345.herokuapp.com/api/bookings/cancelbookings', {id: id})).data
    return result
    
})

const bookedSlice = createSlice({
    name: 'bookings',
    initialState,
    extraReducers: builder => {
        builder.addCase(getbookings.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(getbookings.fulfilled, (state, action) =>{
            state.loading = false
            state.response = action.payload
        })
        builder.addCase(getbookings.rejected, (state, action) =>{
            state.loading = false
            state.error = action.error
        })
        builder.addCase(cancelBooking.fulfilled, (state, action) =>{
            state.message = action.payload
            window.location.reload()
        })
        builder.addCase(cancelBooking.rejected, (state, action) =>{
            state.error = action.error
        })
    }
})

export default bookedSlice.reducer