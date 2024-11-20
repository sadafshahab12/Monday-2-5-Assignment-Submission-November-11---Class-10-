import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='bg-slate-800 text-white flex md:flex-row flex-col justify-between items-center py-5 md:px-10 px-5 md:space-y-0 space-y-3'>
        <div className='space-y-4'>
            <h1 className='md:text-4xl text-3xl font-bold'>Book Hub</h1>
            <p className='md:text-2xl text-xl text-gray-500'>Organize Your Books, Simplify Your Reading</p>
        </div>
        <div className='text-[1rem] tracking-wider'>
            Developed by <span className='font-bold'>Sadaf Shahab</span>  2024 | All Rights Reserved
        </div>
      </footer>
    </>
  )
}

export default Footer
