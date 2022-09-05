import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchList} from '../../redux/features/listingSlice'

function AdminRoom() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.list);
  const data = state.listed
 
  useEffect(() =>{
    dispatch(fetchList())
},[dispatch]) 
  const list= data.map(data =>(
    <tr key={data._id} className='border-2'>
        <td  className='border-r-2 p-3'>{data._id}</td>
        <td  className='border-r-2 p-3'>{data.name}</td>
        <td  className='border-r-2 p-3'>{data.type}</td>
        <td  className='border-r-2 p-3'>{data.rentperday}</td>
        <td  className='border-r-2 p-3'>{data.phonenumber}</td>
    </tr>
  ))

  return (
    <div className='p-5 shadow-lg m-3'>
      <h1>There are a total of {data.length} rooms listed</h1>
        <table className='w-[70rem]'>
          <thead>
            <tr className='border-2'>
                <th className='border-r-2 p-3'>Room Id</th>
                <th className='border-r-2 p-3'>Room Name</th>
                <th className='border-r-2 p-3'>Room Type</th>
                <th className='border-r-2 p-3'>Rent Per Day</th>
                <th className='border-r-2 p-3'>Contact</th>
            </tr>
          </thead>
          <tbody>
            {list} 
          </tbody>
        </table>
    </div>
  )
}
export default AdminRoom