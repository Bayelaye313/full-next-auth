

import React from 'react'
import { BsCheckCircle, BsExclamationTriangle } from 'react-icons/bs'

interface formSuccessProps{
    message?:string
}

const FormSuccess = ({message}:formSuccessProps) => {
    if(!message) return null
  return (
    <div className='bg-emerald-500/15 text-emerald-500 text-sm flex justify-center items-center p-3 gap-x-2'>
        <BsCheckCircle className='h-8 w-8'/>
        <p>{message} </p>
      
    </div>
  )
}

export default FormSuccess
