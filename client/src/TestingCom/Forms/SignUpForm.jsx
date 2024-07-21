import React, { useState } from 'react'
import BgImg from '../../assets/Image.jpg'
import { BsMortarboardFill, BsPersonFill, BsPersonPlusFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const SignUpForm = ({Icon}) => {
    const [SignUpData, SetSignUpData] = useState({
        username: '',
        email: '',
        password: ''
    })

    // send data to backend using axios
    const headleSubmit = async (e) => {
        e.preventDefault();

    }

    const styles = {
        background: `url(${BgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    <div style={styles} className='bg-gradient-to-r from-violet-500 to-purple-500 min-h-screen py-24 px-8'>
        <div className="md:grid grid-cols-3 gap-2">
            <div className=""></div>
            <div className="md:mx-8"> 
                <div className="bg-gradient-to-br from-fuchsia-50 to-pink-200 rounded-2xl shadow-md w-full py-4 md:px-0 px-4">
                    <center className='text-purple-500 my-4'>
                        <div className="">
                            {Icon}
                        </div>
                        <h1 className="text-xl font-semibold pb-6">Registation</h1>
                    </center>
                    <hr className='my-2'/>
                    <div className="my-4">
                        <form onSubmit={headleSubmit}>
                             <div className="my-2 md:mx-8">
                                <label htmlFor="" className='text-purple-500 font-semibold'>Username : </label>
                                <input type="text" name="" id="" className="w-full h-12 pl-2 rounded bg-purple-300 text-purple-800 placeholder-white" required placeholder='Enter Username'
                                onChange={e => SetSignUpData({...SignUpData, username:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <label htmlFor="" className='text-purple-500 font-semibold'>Email : </label>
                                <input type="email" name="" id="" className="w-full h-12 pl-2 rounded bg-purple-300 text-purple-800 placeholder-white" required placeholder='Enter Email Address'
                                onChange={e => SetSignUpData({...SignUpData, email:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <label htmlFor="" className='text-purple-500 font-semibold'>Password : </label>
                                <input type="password" name="" id="" className="w-full h-12 pl-2 rounded bg-purple-300 text-purple-800 placeholder-white" required placeholder='Enter Password' 
                                onChange={e => SetSignUpData({...SignUpData, password:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <button type='submit' className='mt-8 font-semibold w-full py-4 px-8 rounded bg-purple-500 text-white shadow-md duration-500 hover:bg-purple-600'>Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <hr className='my-2'/>
                    <p className="my-4 pl-4 text-purple-500">Already have an Account ? <Link to={'/'}><span className="text-purple-800">SignIn</span></Link></p>
                </div>  
            </div>
            <div className=""></div>
        </div>
    </div>
  )
}

export default SignUpForm