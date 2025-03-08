interface cardWrapperProps {
    children : React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial ?: boolean
}

import React from 'react'
import { Card, CardContent, CardHeader, CardFooter } from '../ui/card';
import Header from './Header';
import Social from './Social';
import BackButton from './BackButton';

const CardWrapper = ({children, backButtonLabel,headerLabel, backButtonHref, showSocial}:cardWrapperProps) => {
  return (
    <Card className='w-full max-w-md shadow-md'>
         <CardHeader>
            <Header label={headerLabel} />
        </CardHeader>
        <CardContent>
            {children} 
        </CardContent>
        { showSocial &&
            (<CardFooter>
            <Social/>
            </CardFooter>)
        }
        <CardFooter>
            <BackButton  href ={backButtonHref} label={backButtonLabel} />
        </CardFooter>
       
    </Card>
  )
}

export default CardWrapper
