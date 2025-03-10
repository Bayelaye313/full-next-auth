"use client"
interface loginButtonProps{
    children: React.ReactNode;
    mode?: 'modal'|'redirect';
    asChild?: boolean
}

import { useRouter } from 'next/navigation';
import React from 'react'

const LoginButton = ({children, mode = "redirect", asChild}:loginButtonProps) => {
    const router = useRouter()
    const onClick = ()=>{
        router.push('/auth/login')
    }
  return (
    <span onClick={onClick} className='cursor-pointer'>
      {children}
    </span>
  )
}

export default LoginButton
