import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


const initialState ={
    loading: false,
    listed:[],
    error:''
}
export const fetchList = createAsyncThunk('home/fetchList', () => { 
    return fetch('https://serene-crag-84345.herokuapp.com/api/apartment/getrooms')
    .then(res =>res.json())
    .then(data => data)
})

const listSlice = createSlice({
    name: 'homes',
    initialState,
    extraReducers: builder =>{
        builder.addCase(fetchList.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchList.fulfilled, (state, action) =>{
            state.loading = false
            state.listed = action.payload
        })
        builder.addCase(fetchList.rejected, (state, action) =>{
            state.loading= false
            state.error = action.error
        })
    }
})


export default listSlice.reducer