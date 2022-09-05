import React from 'react'
import Button from './reuseables/Button'

function Body() {
  return (
    <div>
        <div className='bg-heroimg bg-center bg-cover h-screen'>
            <div className='bg-black opacity-75 h-full flex items-center justify-center'>
                <div  className='text-center'>
                <h3 className='sm:text-4xl text-2xl font-bold text-white px-4'>
                    Creating Unforgettable Hospitality Experience For Guest
                </h3> <br/>
                <Button title="Book Now" color="black" text="white"/>
            </div>
            </div> 
        </div>
    </div>
  )
}

export default Body