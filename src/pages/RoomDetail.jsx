import React from 'react'
import {Link, useParams}  from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from 'react';
import {fetchRoomById} from '../redux/features/detailSlice'
import { bookRoom } from '../redux/features/bookingSlice';
import Loader from '../components/reuseables/Loader'
import Error from '../components/reuseables/Error'
import {TiArrowLeftThick} from 'react-icons/ti'
import DateFilter from '../components/DateFilter';
import { usePaystackPayment } from "react-paystack";

function RoomDetail() {
    const store = useSelector(store => store)
    const state = store.detail;
    const room = state.room
    const {id} = useParams()  
    const dispatch = useDispatch();
    const user = localStorage.getItem('currentuser') ? store.user.user.temp : null
    const userid = user !==null ? user.id : null
    const date = state
    const {fromDate, toDate, totalAmount, totalDays} =date
    const roomid = id
    const roomname = room.name
    const [successMessage, setMessage] =useState(false)
    const [errorMessage, setError] =useState(false)

       const bookingDetails ={
        roomname,
        roomid,
        userid,
        fromDate,
        toDate,
        totalAmount,
        totalDays
}
    const [config, setConfig] = useState({
        name: room.name,
        email: user ? user.email : null,
        amount: totalAmount, 
        publicKey:"pk_test_28c0619dbb022cf149a95d98ed28e271df1e4bc2"
     })
    const initializePayment = usePaystackPayment(config);
   ;
    function onSuccess(){
        dispatch(bookRoom(bookingDetails))
        setMessage(true)
    }
    function onClose(){
        setError(true)
    }

    useEffect(()=>{
        dispatch(fetchRoomById(id))
    }, [dispatch])
async function paynow(){
   await setConfig({
        name: room.name,
        email: user ? user.email : null,
        amount: totalAmount, 
        publicKey:"pk_test_28c0619dbb022cf149a95d98ed28e271df1e4bc2"
    })
    if(localStorage.getItem('currentuser')){
        initializePayment(onSuccess, onClose)
    }else{
        window.location.href='/login'
    } 
}
  return (
    <div className='sm:p-12 '>
        <div className='p-4'>
            <Link to='/listings'>
                <TiArrowLeftThick size={30} />
            </Link>
        </div>
        { state.loading ? <div><Loader /></div> : room ?
        (<>
            <div className='font-bold text-xl p-4'>
                <h1>{room.name}</h1>
            </div>
            <div className='flex flex-wrap p-4'>
                <img className="rounded-l-lg shadow-lg lg:w-1/2" src={room.imageurls ? room.imageurls[0]: null} alt='' />
                <div className='flex lg:block px-4'>
                    <img className='sm:w-64 w-32 rounded-lg m-2' src={room.imageurls ? room.imageurls[1] : null }alt='' />
                    <img className='sm:w-64 w-32 rounded-lg m-2' src={room.imageurls ? room.imageurls[2] : null }alt='' />
                </div>
            </div>
            <div className='p-4 font-medium  sm:w-full'>
                <p>{room.description}</p>
                <div className='flex justify-around items-center '>
                    <div className='mt-4'>
                        <p><b>Rent per day: </b>N{room.rentperday}</p>
                        <p><b>Room Type: </b>{room.type}</p>
                        <p><b>Maximum Occupant: </b>{room.maxcount}</p>
                    </div>
                    <div>
                        <p><b>From:</b> {date.fromDate} ---- <b>To:</b> {date.toDate}</p>
                        <p><span>Total Days:</span> {date.totalDays}</p>
                        <p><span className='font-bold'>Total Amount:</span> {date.totalAmount}</p>
                    </div>
                    <div>
                        <p className='font-bold pl-4'>Choose Your Reservation Date</p>
                        <DateFilter />
                    </div>
                </div>    
            </div>
            {
                localStorage.getItem('currentuser')
                ?
                <div className='p-4 lg:flex lg:justify-center'>
                    <button onClick={paynow} className='w-full sm:w-1/2 bg-green-800 p-2 rounded-lg text-white font-bold'>Reserve</button> 
                </div>
                :
                <div className='p-4 lg:flex lg:justify-center'>
                    <Link to='/login' className='text-center w-full sm:w-1/2 bg-green-800 p-2 rounded-lg text-white font-bold'>
                        Login to Book
                    </Link> 
                </div>
}
                
        </>) : state.error ? <Error message='Oops something went wrong....Try again' /> : null
        }
        
    </div>
  )
}

export default RoomDetail

