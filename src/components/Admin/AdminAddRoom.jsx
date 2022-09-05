import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addRoom} from '../../redux/features/AdminSlice'

function AdminAddRoom() {
  const dispatch = useDispatch()
  const[url1, setUrl1] = useState('')
  const[url2, setUrl2] = useState('')
  const[url3, setUrl3] = useState('')
  const [details, setDetail] = useState({
    name: '',
    description: '',
    maxcount: '',
    phonenumber: '',
    type: '',
    rentperday: '',
    imageurls:[]
})

function handleChange(e){
  const {name, value} = e.target
  setDetail((prev)=>{
    return{
      ...prev,
       [name]: value
    }
   
  })
}
function handleSubmit(){
  if(details.name && details.description && details.rentperday && details.type){
    details.imageurls.push(url1,url2,url3)
    dispatch(addRoom(details))
  }else{
    alert('all filleds required')
  }
  
}
  return (
    <div>
      <div className='px-7'>
        <div className='flex flex-col p-2 '>
          <label className='font-bold text-lg'>Room Name</label>
          <input onChange={handleChange} 
          className='p-2 sm:w-1/2 border-2 border-black' 
          type='text' placeholder='Room Name' 
          value={details.name} name='name'/>
        </div>
        <div className='flex flex-col p-2'>
          <label className='font-bold text-lg'>Description</label>
          <input onChange={handleChange} 
          className='p-2 sm:w-1/2 border-2 border-black' 
          type='text' placeholder='Decription' 
          value={details.descripton} name='description'/>
        </div>
        <div className='flex flex-col p-2'>
          <label className='font-bold text-lg'>Max Count</label>
          <input onChange={handleChange} 
          className='p-2 sm:w-1/2 border-2 border-black' 
          type='text' placeholder='Max Count' 
          value={details.maxcount} name='maxcount'/>
        </div>
        <div className='flex flex-col p-2'>
          <label className='font-bold text-lg'>Phone Number</label>
          <input onChange={handleChange} 
          className='p-2 sm:w-1/2 border-2 border-black' 
          type='number' placeholder='Phone Number' 
          value={details.phonenumber} name='phonenumber'/>
        </div>
        <div className='flex flex-col p-2'>
          <label className='font-bold text-lg'>Add Type</label>
          <input onChange={handleChange} 
          className='p-2 sm:w-1/2 border-2 border-black' 
          type='text' placeholder='Type' 
          value={details.type} name='type'/>
        </div>
        <div className='flex flex-col p-2'>
          <label className='font-bold text-lg'>Add Rent </label>
          <input onChange={handleChange} 
          className='p-2 sm:w-1/2 border-2 border-black' 
          type='number' placeholder='Rent' 
          value={details.rentperday} name='rentperday'/>
        </div>
        <div className='flex flex-col p-2'>
          <label className='font-bold text-lg'>Add Image</label>
          <input onChange={(e)=>setUrl1(e.target.value)} 
          className='p-2 sm:w-1/2 border-2 border-black' 
          type='text' placeholder='Image Url 1' 
          value={url1} name='url1'/>
        </div>
        <div className='flex flex-col p-2'>
          <label className='font-bold text-lg'>Add Image 2</label>
          <input onChange={(e)=>setUrl2(e.target.value)} 
          className='p-2 sm:w-1/2 border-2 border-black' 
          type='text' placeholder='Image Url 2' 
          value={url2} name='url2'/>
        </div>
        <div className='flex flex-col p-2'>
          <label className='font-bold text-lg'>Add Image 3</label>
          <input onChange={(e)=>setUrl3(e.target.value)} 
          className='p-2 sm:w-1/2 border-2 border-black' 
          type='text' placeholder='Image Url 3' 
          value={url3} name='url3'/>
        </div>
        <button onClick={handleSubmit} className='p-2 rounded-md bg-gray-800 text-white font-bold my-2 hover:bg-gray-300 hover:text-black'>
          Add Room
        </button>
      </div>
    </div>
  )
}

export default AdminAddRoom