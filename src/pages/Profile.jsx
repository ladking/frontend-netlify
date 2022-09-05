import React from 'react'
import {Tabs} from 'antd'
import {useSelector} from 'react-redux'
import Bookings from '../components/Bookings'


function Profile() {
    const {TabPane} =Tabs
    const store = useSelector(store => store)
    const user = store.user.user
    
    return (
    <div className='p-8'>
        
       <Tabs defaultActiveKey='1'>
        <TabPane tab='Profile' Key="1" >
            <h1>My Profile</h1>
            <div className='p-5 shadow-lg mt-4'>
                <p className='font-bold text-lg'>Name: <span className='text-base font-medium'>
                    {user ? user.temp.name : null}</span></p> 
                <p className='font-bold text-lg'>Email: <span className='text-base font-medium'>
                    {user ? user.temp.email: null}</span></p> 
            </div>
        </TabPane>
        <TabPane tab="Bookings" key="2">
            <Bookings />
        </TabPane>
       </Tabs>
    </div>
  )
}

export default Profile