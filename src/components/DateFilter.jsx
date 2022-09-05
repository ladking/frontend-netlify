import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {DatePicker, Space} from 'antd'
import 'antd/dist/antd.css'
import {dateFilter} from '../redux/features/detailSlice'
import { totaldays, totalamount } from '../redux/features/detailSlice';

function DateFilter() {
    const dispatch = useDispatch()
    const {RangePicker} = DatePicker;
    
    function filterByDate(dates){
        dispatch(dateFilter(dates))
        dispatch(totaldays())
        dispatch(totalamount())
      }
  return (
    <div className='p-4 px-8 flex shadow-lg'>
    <RangePicker format='DD-MM-YYYY' onChange={filterByDate}/>
</div>
  )
}

export default DateFilter