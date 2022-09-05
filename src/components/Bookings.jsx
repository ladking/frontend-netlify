import React from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getbookings, cancelBooking} from '../redux/features/getBookingSlice';


function Bookings() {
    const store = useSelector(store => store)
    const bookings = store.getbook
    const user = store.user.user
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getbookings(user.temp.id))       
    }, [dispatch])
    function handleClick(data){
        dispatch(cancelBooking(data))
    }
    const list = bookings.response.map(data => (
        <div key={data._id} className='shadow-lg p-4 my-2'>
            <h1 className='font-medium'><span className='font-bold text-lg'>Name:  </span>  
               {data.roomname}</h1>
            <p className='font-medium'><span className='font-bold text-lg'>Check-In:  </span>  
                {data.fromdate}</p>
            <p className='font-medium'><span className='font-bold text-lg'>Check-Out:  </span>  
                {data.todate}</p>
            <p className='font-medium'><span className='font-bold text-lg'>Status:  </span>  
               <span className={data.status === 'booked' ? 'text-green-500' : 'text-red-600'}> {data.status}</span></p>
            {
                data.status === 'booked' 
                ?
                    <button onClick={() => handleClick(data._id)} className='bg-red-500 p-3 rounded-md text-white font-bold'>
                    Cancel Booking
                </button>
                : null
            }
        </div>
    ))
  return (
    <div>
        {
            bookings.response.length < 1
            ?
            <h1 className='text-black'>You currently have no bookings</h1> 
            :
            <div>
                {list}
            </div>
        }
        
    </div>
  )
}

export default Bookings