import React from 'react'
import { CircularText } from './Icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TwitterIcon,DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from './Icons'

const HireMe = () => {
  return (
    
    <div className='fixed right-4 bottom-4 flex items-center justify-center overflow-hidden'>
    

<div className='w-48 h-auto flex items-center justify-center relative'>
        
<CircularText className={" fill-dark dark:fill-light animate-spin-slow"}/>
<Link href="mail to: ajay2002maurya@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-normalGreen text-light shadow-md border-solid border-dark w-20 h-20 rounded-full
font-semibold hover:bg-light hover:text-dark  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light 
                hover:dark:border:light
                '>
AM
</Link>
</div>
      
    </div >
  )
}

export default HireMe
