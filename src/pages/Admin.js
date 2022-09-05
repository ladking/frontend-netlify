import React from 'react'
import {Tabs} from 'antd'
import AdminBookings from '../components/Admin/AdminBookings'
import AdminRooms from '../components/Admin/AdminRooms'
import AdminAddRoom from '../components/Admin/AdminAddRoom'
import AdminUsers from '../components/Admin/AdminUsers'

function Admin() {
    const {TabPane} = Tabs
  return (
    <div className='p-4'>
        <Tabs>
            <TabPane tab='Bookings' key='1' >
                <AdminBookings />
            </TabPane>
            <TabPane tab='Rooms' key='2' >
                <AdminRooms />
            </TabPane>
            <TabPane tab='Add Room' key='3' >
                <AdminAddRoom />
            </TabPane>
            <TabPane tab='User' key='4' >
                <AdminUsers />
            </TabPane>
        </Tabs>
    </div>
  )
}

export default Admin