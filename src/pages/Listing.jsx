import React from 'react'
import Lists from '../components/Lists'
import {useDispatch, useSelector} from 'react-redux'
import {fetchList} from '../redux/features/listingSlice'
import {useEffect} from 'react'
import Loader from '../components/reuseables/Loader';

function Listing() {
const state = useSelector(state => state.list);

const dispatch = useDispatch();

useEffect(() =>{
    dispatch(fetchList())
},[dispatch])    

  return (
    <div>
        { 
            state.loading ?
                <Loader />
            :(
                <div className='sm:m-8 lg:m-0'>
                    <Lists />
                </div>
                
            )
        }   
   </div>
  )
}

export default Listing