import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    message:'',
    response:'',
    error: ''
}

export const register = createAsyncThunk('userregister/register',async (user)=>{
    try{
        const data = (await axios.post('https://serene-crag-84345.herokuapp.com/api/user/register', user)).data
        return data
    }catch(err){
        console.log('recieved error:', err)
    }
})

const userSlice = createSlice({
    name: 'userregister',
    initialState,
    extraReducers: builder =>{
        builder.addCase(register.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(register.fulfilled, (state, {payload}) =>{
            state.loading = false
            if(payload.status === 200){
                state.message = true
                state.response = payload
            }else if(payload.status !== 200){
                state.message = false
            }
        })
        builder.addCase(register.rejected, (state, {error}) =>{
            state.error = error
        })
    },
})

export default userSlice.reducer