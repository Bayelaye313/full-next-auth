"use client"; 
import React from 'react';
import { Button } from '../ui/button';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Social = () => {
  return (
    <div className='flex items-center justify-center w-full gap-x-2'>
      <Button size={"lg"} className='flex-1' variant={"outline"} onClick={()=>{}}>
        <FcGoogle className='h-5 w-5'/>
      </Button>
      <Button size={"lg"} className='flex-1' variant={"outline"} onClick={()=>{}}>
        <FaGithub className='h-5 w-5'/>
      </Button>
    </div>
  );
};

export default Social;