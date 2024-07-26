import React from 'react'
import SignUpForm from '../TestingCom/Forms/SignUpForm'
import { Bs0CircleFill } from 'react-icons/bs'
import BgImg from '../assets/Image.jpg'

const FormTesting = () => {
  return (
    <div>
        <SignUpForm
          Icon={<Bs0CircleFill className='h-16 w-auto rounded-full'/>}
          BgImage={BgImg}
          FormBGColor={'bg-pink-100'}
          TextColor={'text-red-500'}
          LinkColor={'text-red-700'}
          InputColor={'bg-red-200'}
          PlaceHolderColor={'white'}
          BtnBG={'bg-green-500'}
          BtnTextColor={'text-white'}
        />
    </div>
  )
}

export default FormTesting