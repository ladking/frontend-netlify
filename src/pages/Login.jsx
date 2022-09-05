import React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/features/loginSlice';
import Loader from '../components/reuseables/Loader'
function Login() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.login)
    const [data, setData] = useState({
        email:'',
        password:'',
    })
    function handleChange(e){
        const {value, name} = e.target
        setData((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        })

    }
    function handleClick(){
        if(data.password && data.email){
           dispatch(login(data))
           setData({
            email : '',
            password: ''
           })
        }else if(!data.password || !data.email){
                alert('all filleds required')
        }
    }
  return (
    <div className=''>
        {
            state.loading ? 
            <div>
                <Loader />
            </div>
       :
        <div className='bg-signin h-screen bg-cover bg-no-repeat'>
            <div>
                {state.status === true 
                ? <p className='bg-green-400 text-white font-bold p-4'>Login Sucess</p> 
                : 
                state. status === false 
                ? <p className='bg-red-500 text-white font-bold p-4'>Login Failed...Try Again</p>
                :   null}
            </div>
            <div className='bg-black opacity-75 h-full flex items-center flex-col'>
                <div>
                    <h1 className='text-center font-bold text-white sm:text-4xl py-4'>
                        Keep Exploring
                    </h1>
                    <h4 className='text-center font-bold text-white sm:text-3xl py-4'>
                        Login
                    </h4>
                </div>
                <div className='flex flex-col gap-10 sm:w-1/2 w-full px-8'>
                    <input className='p-4 rounded-md text-base' 
                    value={data.email} name='email' type='text' placeholder='email' 
                    onChange={handleChange}
                    />
                    <input className='p-4 rounded-md text-base' 
                    value={data.password} name='password' type='text' placeholder='password' 
                    onChange={handleChange}
                    />
                    <button onClick={handleClick} className='bg-red-900 p-4 w-full text-white font-black text-xl'>
                        Login
                    </button>
                </div>
            </div>
        </div>
         }
    </div>
  )
}

export default Login