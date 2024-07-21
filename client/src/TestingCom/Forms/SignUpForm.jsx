import React from 'react'
import BgImg from '../../assets/Image.jpg'

const SignUpForm = ({title}) => {
    const styles = {
        background: `url(${BgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    <div style={styles} className='bg-gradient-to-r from-violet-500 to-purple-500 min-h-screen py-24 px-8'>

    </div>
  )
}

export default SignUpForm