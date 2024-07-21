import React from 'react'
import SignUpForm from '../TestingCom/Forms/SignUpForm'
import { Bs0CircleFill } from 'react-icons/bs'


const FormTesting = () => {
  return (
    <div>
        <SignUpForm Icon={<Bs0CircleFill className='h-16 w-auto rounded-full'/>}/>
    </div>
  )
}

export default FormTesting