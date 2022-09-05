import React from 'react';
import Home  from './pages/Home';
import Navbar from './components/reuseables/Navbar';
import {Route, Routes} from 'react-router-dom';
import Listing from './pages/Listing';
import RoomDetail from './pages/RoomDetail';
import SignUp from './pages/SignUp';
import Login from "./pages/Login";
import {useSelector} from 'react-redux'
import Profile from './pages/Profile'
import Bookings from './components/Bookings';
import Admin from './pages/Admin';
function App() {
  const state = useSelector(state => state.user)
  const user = state.user
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listings' element={<Listing />} />
        <Route path='/detail/:id' element={<RoomDetail/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        
        {
          user ?
          <>
            <Route path='/admin' element={<Admin />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/bookings' element={<Bookings/>}/>
          </>
          :
          null
        }
      </Routes>
      
    </div>
  )
}

export default App