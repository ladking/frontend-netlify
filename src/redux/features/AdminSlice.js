import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState ={
    loading: false,
    adminloading: false,
    bookings:[],
    error:'',
    allusers:[],
    adminerror:[],
    addRoomerror:'',
    addRoomloadng: false,
    addRoomresponse:'',
}

export const getbookings = createAsyncThunk('admin/getbookings', async() =>{
    const result = await (await axios.get('http://localhost:8000/api/bookings/admingetbooking')).data
    return result

})
export const getallusers = createAsyncThunk('admin/getallusers', async() =>{
    const result = await (await axios.get('http://localhost:8000/api/user/getallusers')).data
    return result
})
export const addRoom = createAsyncThunk('admin/addRoom', async(data) =>{
    const result = await (await axios.post('http://localhost:8000/api/apartment/addroom', data)).data
    return result
})
const adminSlice = createSlice({
    name:'admin',
    initialState,
    extraReducers:builder =>{
        builder.addCase(getbookings.pending, (state) =>{
            state.loadng = true
        })
        builder.addCase(getbookings.fulfilled, (state, action) =>{
            state.loadng = false
            state.bookings = action.payload
        })
        builder.addCase(getbookings.rejected, (state, action) =>{
            state.loadng = false
            state.error = action.error
        })
        builder.addCase(getallusers.pending, (state) =>{
            state.adminloadng = true
        })
        builder.addCase(getallusers.fulfilled, (state, action) =>{
            state.adminloadng = false
            state.allusers = action.payload
        })
        builder.addCase(getallusers.rejected, (state, action) =>{
            state.adminloadng = false
            state.adminerror = action.error
        })
        builder.addCase(addRoom.pending, (state) =>{
            state.addRoomloadng = true
        })
        builder.addCase(addRoom.fulfilled, (state, action) =>{
            state.addRoomloadng = false
            state.addRoomresponse = action.payload
        })
        builder.addCase(addRoom.rejected, (state, action) =>{
            state.addRoomloadng = false
            state.addRoomerror = action.error
        })
        
        
    }
})

export default adminSlice.reducer