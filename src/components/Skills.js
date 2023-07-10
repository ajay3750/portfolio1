import React from 'react'
import {motion} from "framer-motion"

const Skill=({name,x,y})=>{
    return(
        <motion.div className='flex items-center jsutify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-Dark cursor-pointer
            shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light'
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y, transition:{duration:1.5}}}
            >{name}
            </motion.div>

    )

}
const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-40 w-full text-center '>Skills</h2>
    <div className='w-full h-screen relative flex items-center  justify-center rounded-full bg-circularLight bg-red dark:bg-circularDark'>
            <motion.div className=' dark:bg-orange flex items-center jsutify-center rounded-full font-semibold bg-orange text-light p-8 shadow-Dark cursor-pointer dark:text-dark dark:bg-light
            '
            whileHover={{scale:1.05}}
            >Web
            </motion.div>
            <Skill name="HTML" x="-20vw" y="2vw"/>
            <Skill name="CSS" x="-5vw" y="-10vw"/>
            <Skill name="Javascript" x="20vw" y="6vw"/>
            <Skill name="ReactJS" x="0vw" y="13vw"/>
            <Skill name="NextJS" x="-20vw" y="-17vw"/>
            <Skill name="AdobeXD" x="15vw" y="-12vw"/>
            <Skill name="Web Design" x="32vw" y="-5vw"/>
            <Skill name="Figma" x="0vw" y="-20vw"/>
            <Skill name="Behance" x="-25vw" y="20vw"/>
            <Skill name="Tailwind CSS" x="18vw" y="18vw"/>

    </div>
    
    </>
  )
}

export default Skills