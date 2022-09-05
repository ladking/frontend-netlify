import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getbookings} from '../../redux/features/AdminSlice'

function AdminBookings() {
  const dispatch = useDispatch()
  const store = useSelector(store => store.admin)
  const bookings = store.bookings
  useEffect(()=>{
    dispatch(getbookings())
  },[dispatch])

  const data = bookings.map(data =>(
    <tr key={data._id} className='border-2'>
        <td  className='border-r-2 p-3'>{data.roomname}</td>
        <td  className='border-r-2 p-3'>{data.userid}</td>
        <td  className='border-r-2 p-3'>{data.fromdate}</td>
        <td  className='border-r-2 p-3'>{data.todate}</td>
        <td  className='border-r-2 p-3'>{data.status}</td>
    </tr>
  ))
  return (
    <div className='p-5 shadow-lg m-3'>
      <h1>There are a total of {bookings.length} Bookings</h1>
        <table className='w-[70rem]'>
          <thead>
            <tr className='border-2'>
                <th className='border-r-2 p-3'>Room Name</th>
                <th className='border-r-2 p-3'>User Name</th>
                <th className='border-r-2 p-3'>Check In</th>
                <th className='border-r-2 p-3'>Check Out</th>
                <th className='border-r-2 p-3'>Status</th>
            </tr>
          </thead>
          <tbody>
            {data} 
          </tbody>
        </table>
    </div>
  )
}

export default AdminBookings