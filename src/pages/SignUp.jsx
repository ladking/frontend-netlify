import React from 'react'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../redux/features/registerSlice';

function SignIn() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.register)
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:''
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
        if(data.password === data.confirmpassword && data.name && data.email){
            dispatch(register(data))
            setData({
                name:'',
                email:'',
                password:'',
                confirmpassword:''
            })
        }else if(!data.name || !data.email){
                alert('All Filleds required')
        }else{
            alert("password don't match")
        }
    }
  return (
    <div className=''>
        <div>
                {state.message === true 
                ? <p className='bg-green-400 text-white font-bold p-4'>Registration Sucess...Please Proceed to Login</p> 
                : 
                state.message === false 
                ? <p className='bg-red-400 text-white font-bold p-4'>Registration Failed...Try Again</p>
                :   null}
            </div>
        <div className='bg-signin h-screen bg-cover bg-no-repeat'>
            <div className='bg-black opacity-75 h-full flex items-center flex-col'>
                <div>
                    <h1 className='text-center font-bold text-white sm:text-4xl py-4'>
                        Discover The Perfect Apartment
                    </h1>
                    <h4 className='text-center font-bold text-white sm:text-3xl py-4'>
                        Register
                    </h4>
                </div>
                <div className='flex flex-col gap-10 sm:w-1/2 w-full px-8'>
                    <input className='p-4 rounded-md text-base' 
                    value={data.name} name='name' type='text' placeholder='name' 
                    onChange={handleChange}
                    />
                    <input className='p-4 rounded-md text-base' 
                    value={data.email} name='email' type='text' placeholder='email' 
                    onChange={handleChange}
                    />
                    <input className='p-4 rounded-md text-base' 
                    value={data.password} name='password' type='text' placeholder='password' 
                    onChange={handleChange}
                    />
                    <input className='p-4 rounded-md text-base' 
                    value={data.confirmpassword} name='confirmpassword' type='text' placeholder='confirm password' 
                    onChange={handleChange}
                    />
                    <button onClick={handleClick} className='bg-red-900 p-4 w-full text-white font-black text-xl'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn