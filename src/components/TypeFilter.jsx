import React from 'react'
import { useState } from 'react'
import {TiArrowSortedDown} from 'react-icons/ti'

function TypeFilter({handleType, type}) {
    const[drop, setDrop] = useState(false)

  return (
        <div onClick={()=>setDrop(!drop)} className='w-[250px] relative'>
            <div className='flex justify-between border-2 border-gray-500 p-2'>
                <span className=' font-medium text-base'>{type}</span>
                <TiArrowSortedDown size='23px' />
            </div>
            {drop ?
                <div className='absolute right-0 bg-gray-200 py-5 px-5 font-bold text-base flex flex-col gap-5'>
                    <span onClick={()=>handleType('All')}>All</span>
                    <span onClick={()=>handleType('Delux')}>Delux</span>
                    <span onClick={()=>handleType('Non-Delux')}>Non-Delux</span>
                </div>
                : null
            }
        </div>
  )
}

export default TypeFilter