import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getallusers} from '../../redux/features/AdminSlice'

function AdminUsers() {
  const dispatch = useDispatch()
  const store = useSelector(store => store.admin)
  const users = store.allusers
  useEffect(()=>{
    dispatch(getallusers())
  },[dispatch])

  const data = users.map(data =>(
    <tr key={data._id} className='border-2'>
        <td  className='border-r-2 p-3'>{data._id}</td>
        <td  className='border-r-2 p-3'>{data.name}</td>
        <td  className='border-r-2 p-3'>{data.email}</td>
        <td  className='border-r-2 p-3'>{data.createdAt}</td>
        <td  className='border-r-2 p-3'>{data.isAdmin}</td>
    </tr>
  
  ))
  return (
    <div className='p-5 shadow-lg m-3'>
      <h1>There are a total of {users.length} Users</h1>
        <table className='w-[70rem]'>
          <thead>
            <tr className='border-2'>
                <th className='border-r-2 p-3'>User Id</th>
                <th className='border-r-2 p-3'>User Name</th>
                <th className='border-r-2 p-3'>User Email</th>
                <th className='border-r-2 p-3'>Created</th>
                <th className='border-r-2 p-3'>Admin</th>
            </tr>
          </thead>
          <tbody>
            {data} 
          </tbody>
        </table>
    </div>
  )
}

export default AdminUsers