import React from 'react'
import { AuthButtonComponentProps } from './AuthButton.types'

export const AuthButton: AuthButtonComponentProps = ({
    children,
    ...rest
}) => {
  return (
    <button 
        {...rest}
        className='bg-snd-red-700 text-snd-gray-100 text-[60px] p-[18px] w-full font-playfair hover:shadow-lg transition-shadow'
    >
        {children}
    </button>
  )
}

export default AuthButton