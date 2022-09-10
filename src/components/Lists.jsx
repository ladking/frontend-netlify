import React from 'react'
import { useState } from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import SearchFilter from './SearchFilter';
import TypeFilter from './TypeFilter';



function Lists() {    
const state = useSelector(state => state.list);
const data = state.listed
const [duplicate, setDuplicate] = useState(data)
const [searchKey, setKey]= useState('')
    function filter(e){
        setKey(e)
        const temp = data.filter(room =>room.name.toLowerCase().includes(e.toLowerCase()))
        setDuplicate(temp)
    }
    const [type, setType] = useState('Search Type')
    function handleType(type){
        setType(type)
        if(type !== 'All'){
            const temp = data.filter(room => room.type.toLowerCase() == type.toLowerCase())
            setDuplicate(temp)
        }else{
            setDuplicate(data)
        }
       
    }
const list = duplicate.map(prev =>(
    <div key={prev.name} className='rounded-lg m-4 flex flex-col shadow-lg sm:w-[280px] w-full'>
        <div className='rounder-lg h-48'>
            <img className="w-full h-full rounded-lg" src={prev.imageurls[0]} alt='' />
        </div>
        <div className='p-2'>
            <h5 className='h-8 text-base font-bold leading-tight'>{prev.name}</h5>
            <span className='font-medium'>Bedroom <b>:</b></span> <span>{prev.maxcount}</span><br/>
            <span className='font-medium'>Contact <b>:</b></span> <span> {prev.phonenumber}</span><br/>
            <div className='flex justify-between'>
                <p><span className='font-medium'>Type <b>:</b></span><span> {prev.type}</span></p>
                <p className='font-bold'>N{prev.rentperday}</p>
            </div>
        </div>
        <div className='p-2'>
             <Link to={`/detail/${prev._id}`}><button className="bg-gray-800 p-2 rounded-md w-full text-white font-bold">Details</button></Link>
        </div> 
    </div>
))

 
  return (
    <div>
        <div className=' flex justify-around gap-5 m-4 p-4 shadow-lg'>
            <SearchFilter filter={filter} searchKey={searchKey} setKey={setKey} />
            <TypeFilter type={type} handleType={handleType}/>
        </div>
        <h1 className='sm:px-8 px-4 font-bold text-lg pt-4'>{duplicate.length} rooms Are Currently Available</h1>
        <div className='flex flex-wrap sm:px-8'>
            {list}
        </div>
    </div>
    
  )
}

export default Lists