import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
const initialState = {
    loading: false,
    status: '',
    response: '',
    error: ''
}

export const  login = createAsyncThunk('userlogin/login',async (user) =>{ 
    try{
        const data = (await axios.post('https://serene-crag-84345.herokuapp.com/api/user/login', user)).data
        return data   
    }catch(err){
        console.log(err, 'errror message')
    }
})


const loginSlice = createSlice({
    name: 'userlogin',
    initialState,
    reducers:{
        logout: (state) =>{
            localStorage.removeItem('currentuser')
            state.status = false
            window.location.reload()
            window.location.href='https://golden-gumption-52a70d.netlify.app'
        }
    },
    extraReducers: builder =>{
        builder.addCase(login.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action) =>{
            state.loading = false
            state.response = action.payload
            if(state.response && state.response.status === 200){
                state.status = true
                localStorage.setItem('currentuser', JSON.stringify(action.payload))
                window.location.reload()
                window.location.href='https://golden-gumption-52a70d.netlify.app'
            }else if(!state.response ){
                state.status = false
            }
           
        })
        builder.addCase(login.rejected, (state, action) =>{
            state.error = action.error
            console.log('error', action)
        })
    },
})

export default loginSlice.reducer;
export const {logout} = loginSlice.actions