import React from 'react'
import { CgNotes } from "react-icons/cg";
const CardDash = () => {
  return (
    <div className='w-64 px-5 py-3 h-24  bg-gradient-to-b shadow-md from-[var(--primary-color)] to-[var(--secondary-color)]  rounded-lg text-white flex flex-col justify-evenly'>
        <div className='flex w-[100%] items-center justify-between'>
        <p className='font-semibold'>Label</p>
        <CgNotes className='text-2xl'/>
        </div>  
        <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>7,265</h1>  
        {/* <p className='text-green-500'>+11.02%</p>   */}
        </div>  
        </div>
  )
}

export default CardDash