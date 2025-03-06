import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {

  const handleClick = () => {
    window.location.href = 'mailto:mudassarimran234@gmail.com';
};
  return (
    <div>
      <footer className='w-full  border-t-2 border-solid border-dark dark:border-light dark:text-light font-medium text-lg sm:text-base '>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span className=''>{new Date().getFullYear()} &copy; All Right Reserved.</span>
            <div className='flex items-center lg:py-2'>
              Build With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> by&nbsp;<span className=' underline underline-offset-2 cursor-pointer'>Ameen</span>
            </div>
            <button onClick={handleClick} className='underline underline-offset-2' >Say Something. </button>
        </Layout>
      </footer>
    </div>
  )
}

export default Footer
