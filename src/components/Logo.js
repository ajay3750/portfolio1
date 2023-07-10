import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from "next/image";
import profilePic from "../../public/images/profile/pngwing.com.png";
const Logo = () => {
  return (
    
    <motion.div className='flex items-center  justify-center mt-2 animate-spin-slow dark:bg-light'>
      <Link href="/" className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold
     border border-solid border-transparent dark:border-light'>AM</Link>
    </motion.div>
  )
}
export default Logo
