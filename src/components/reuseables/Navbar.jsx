import React from 'react'
import {FaBars, FaTimes, FaUser} from 'react-icons/fa'
import {TiArrowSortedDown} from 'react-icons/ti'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/features/loginSlice'

function Navbar() {
    const[menu, setMenu] = useState(true)
    const[dropdown, setDropdown] = useState(false)
    const state = useSelector(state => state.user)
    const user = state.user
    const dispatch = useDispatch()
    function handleClick(){
        setMenu(!menu)
    }
    function show(){
        setDropdown(!dropdown)
    }
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 680){
            setMenu(true)
        }else{
            setMenu(false)
        }
})
    function signout(){
        dispatch(logout())
    }
  return (
    <div className='relative flex justify-between px-4 bg-[#323232] text-white items-center py-4'>
        <Link to='/'>
            <div className='text-2xl w-32 font-black italic text-white'>
                Shelter
            </div>
        </Link>
        
    <div className={`${menu ? 'flex sm:p-0 sm:flex-row flex-col items-center gap-12 font-bold z-10 sm:static fixed top-0 right-0 bg-[#323232] h-full sm:h-0 p-6' : 'hidden'}`}>
        <div onClick={handleClick} className='sm:hidden block'>
            {menu ? <FaTimes color='white' /> : null}
        </div>
        { 
        user 
        ?
        <>
             <p onClick={show} className='text-lg flex items-center gap-3'>
                <FaUser /> 
                <span className='border-b-2 text-base'>{user.temp.name}</span> 
                <span><TiArrowSortedDown /></span>
            </p>
             {
                dropdown
                ?
                <div className='absolute flex flex-col gap-8  top-16 bg-[#323232] rounded-lg right-4 py-4 px-8'>
                    <p className='pointer m-0' onClick={signout}>Logout</p>
                    <Link className='link text-white' to='/profile'>Bookings</Link>
                    <Link className='text-white' to='/profile'>Profile</Link>
                    <Link className='text-white' to='/listings'>Listings</Link>
                    <Link className='text-white' to='/admin'>Admin</Link>
                </div>
                : 
                null
            }
        </>
        :
            <div className='flex sm:flex-row flex-col gap-5 items-center'>
                <Link to='/login' className='hover:pb-4 hover:border-b-4 pointer text-white'>Login</Link>
                <Link to='/signup' >
                    <button className={`bg-white pointer p-2 rounded-lg text-black font-extrabold text-base`}>
                        Sign Up
                    </button>
                </Link>
            </div>
        }    
    </div>    
        <div onClick={handleClick} className='sm:hidden block'>
            {!menu ? <FaBars color='white' /> : null}
        </div>
    </div>
  )
}

export default Navbar