

import React from 'react'
import { BsExclamationTriangle } from 'react-icons/bs'

interface formErrorProps{
    message?:string
}

const FormError = ({message}:formErrorProps) => {
    if(!message) return null
  return (
    <div className='bg-destructive/15 text-destructive text-sm flex justify-center items-center p-3 gap-x-2'>
        <BsExclamationTriangle className='h-8 w-8'/>
        <p>{message} </p>
      
    </div>
  )
}

export default FormError
