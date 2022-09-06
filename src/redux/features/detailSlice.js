import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import moment from 'moment'


const initialState ={
    loading: false,
    room:[],
    error:'',
    fromDate: '',
    toDate: '',
    totalDays:'',
    totalAmount: ''
}

export const fetchRoomById = createAsyncThunk('home/fetchRoomById', async(id) => { 
    const data = (await axios.post("https://serene-crag-84345.herokuapp.com/api/apartment/getroombyid", {roomid : id})).data
    return data
})

const DetailSlice = createSlice({
    name: 'home',
    initialState,
    reducers:{
        dateFilter: (state, {payload}) => {
            state.fromDate = moment(payload[0]).format('DD-MM-YYYY')
            state.toDate = moment(payload[1]).format('DD-MM-YYYY')
        },
        totaldays: (state) => {
            const todate = moment(state.toDate, 'DD-MM-YYYY')
            const fromdate = moment(state.fromDate, 'DD-MM-YYYY')
            if(todate && fromdate){
            const totaldays = moment.duration(todate.diff(fromdate)).asDays()
                state.totalDays =  totaldays + 1
            }
        },
        totalamount: (state) =>{
            const totalamount = state.totalDays * state.room.rentperday
            state.totalAmount = totalamount
        }
    },
    extraReducers: builder =>{
        builder.addCase(fetchRoomById.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchRoomById.fulfilled, (state, action) =>{
            state.loading = false
            state.room = action.payload
        })
        builder.addCase(fetchRoomById.rejected, (state, action) =>{
            state.loading= false
            state.error = action.error
        })
    }
})


export default DetailSlice.reducer
export const {dateFilter, totaldays, totalamount} = DetailSlice.actions