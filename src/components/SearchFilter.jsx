import React from 'react'

function SearchFilter({filter, searchKey}) {

  return (
    <div className='w-1/2'>
        <input className='border-2 border-gray-500 p-2 w-full' 
        type='text' 
        placeholder='Search Rooms'
        value={searchKey}
        onChange={(e) => filter(e.target.value)}
         />
    </div>
  )
}

export default SearchFilter