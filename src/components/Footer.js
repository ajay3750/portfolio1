import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark: border-light
    '>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserverd </span>
            <div className='flex items-left'>
                Made by <span className='text-red text-2xl px-l dark:text-red'>&#9825;</span>by&nbsp;<Link href='https://google.com'target='_blank' className='underline underline-offset-2'>Ajay Maurya</Link>
            </div>
        </Layout>
    </footer>

  )
}

export default Footer
