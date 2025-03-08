import React from 'react'

const Authlayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex h-screen justify-center items-center bg-sky-600'>
      {children}
    </div>
  )
}

export default Authlayout
