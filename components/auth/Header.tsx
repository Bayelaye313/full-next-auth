import React from 'react'
import { cn } from "@/lib/utils"
import {Poppins} from "next/font/google"


const font = Poppins({
  subsets: ["latin"],
  weight : ["600"]
})
interface headerProps{
    label:string
}

const Header = ({label}:headerProps) => {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
        <h1 className={cn('text-3xl font-semibold',font.className) }>🔒Auth</h1>
        <p className='text-muted-foreground text-sm'> {label} </p>
    </div>
  )
}

export default Header
