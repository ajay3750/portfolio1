import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developerprofile.jpeg'
import profilePic1 from'../../public/images/profile/developerprofile4.jpg'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio~Ajay Maurya</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light '>
        <Layout className='pt-0'>
          <div className='flex items-center  justify-between w-full'>
              <div className='w-1/3'>
                <Image src={profilePic1 } alt="Ajay" className=" w-0.6 h-auto"
                  priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px)50vw,50vw"
                />
                
              </div>
              < div className='w-1/2 flex flex-col items-center self-center'>
                <AnimatedText  text="If you can dream it, I can design it." className='!text-6xl !text-left text-orange'/>
                <p className='my-4 text-base font-medium'>Web developer with the ability to learn and collaborate in a fast-paced environment and composition, innovative task-oriented professional with 2 years of web design and web development experience in clubs and departments. I am a quiet, reserved person who works well both independently and in a group.</p>
              <div className='flex items-center self-start mt-2'>
                <Link href='/ajayResume.pdf' target={'_blank'}
                className='flex items-center  bg-normalGreen text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:border-light hover:bg-light hover:text-dark border border-solid border-transparent
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light 
                hover:dark:border:light
                

                '
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href='mailto:ajnn3750@gmail.com' target='blank'
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'
                >Contact</Link>
              
              </div>
              </div>
          </div>
        </Layout>
        <HireMe/>

      </main>
    </>
  )
}
