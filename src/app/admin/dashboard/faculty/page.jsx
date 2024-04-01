'use client'
import CardDash from '@/app/components/admin/card'
import DataTable from '@/app/components/admin/datatable/datatable'
import React, { useState } from 'react'
import Image from 'next/image'
const Faculty = () => {
    const [inputpopup,setInputpopup] = useState(false)
    //Popup of pictures

    //Input Popup
    const popupinput =  () => {

      return(
        <div className='fixed inset-0 animate-pop flex items-center justify-center bg-gray-800 bg-opacity-50'>
            <div className='w-[900px] bg-white  rounded-xl '>
                <div className='flex p-2 justify-between items-center rounded-t-xl bg-gradient-to-b text-white from-[var(--primary-color)] to-[var(--secondary-color)]'>
                  <h1 className='px-2'>Add Faculty Member</h1>
                  <Image src={'/admin/Groupwhite.svg'} width={30} height={30} className='cursor-pointer' onClick={()=>setInputpopup(false)}/>
                </div>
                <div className='py-8 px-10 flex flex-col gap-5'>
                  {/* Two inputs div */}
                <div className='grid grid-cols-2 gap-16 mb-7'>


                    <div className='flex flex-col gap-5'>

                    <div className='flex items-center'>
                      <label htmlFor="Name" className='font-semibold text-[var(--black-color)] w-[40%]'>Name</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Name' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Grade" className='font-semibold text-[var(--black-color)] w-[40%]'>Grade</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Grade' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Departments" className='font-semibold text-[var(--black-color)] w-[40%]'>Departments</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Departments' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Contact" className='font-semibold text-[var(--black-color)] w-[40%]'>Contact</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Contact' />
                  </div>
                  <div className='flex items-center'>

                      <label htmlFor="nopub" className='font-semibold text-[var(--black-color)] w-[40%]'>No. of Pubs</label>
                      <input type="number" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter No. of pubs' />
                  </div>
                    </div>
                    <div className='flex flex-col gap-5'>

                    <div className='flex items-center'>
                      <label htmlFor="Edition" className='font-semibold text-[var(--black-color)] w-[40%]'>Appointment</label>
                      <input type="date" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Appointment' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Status" className='font-semibold text-[var(--black-color)] w-[40%]'>Status</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Status' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Designation" className='font-semibold text-[var(--black-color)] w-[40%]'>Designation</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Designation' />
                  </div>
                  <div className='flex items-center'>

                      <label htmlFor="Email" className='font-semibold text-[var(--black-color)] w-[40%]'>Email</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Email' />
                  </div>
                    </div>
                </div>
                <hr />
                <div className='flex justify-end'>
                  <button className='px-6 py-2 text-white rounded-full bg-[var(--primary-color)] font-semibold hover:bg-[var(--secondary-color)] transition-all duration-300'>Add</button>
                </div>
                </div>
            </div>
        </div>
      )
    }

    return (
    <div>
        <div className="flex justify-evenly gap-3 mt-5 flex-wrap my-4">
        <CardDash />
        <CardDash />
        <CardDash />
        <CardDash />
      </div>
      <div>
        {inputpopup && popupinput()}
      </div> <div className="m-5 rounded-xl shadow-sm shadow-black w-[calc(100%-40px)] overflow-hidden h-[720px]">   
    {/* Top bar title */}
    <div className="flex p-4 items-center justify-between">
      <div className="font-semibold text-lg">
        Faculty List
      </div>
      <div className="cursor-pointer" onClick={()=>setInputpopup(true)}>
          <Image src={'/admin/Group.png'} alt="Customer Pic" height={30} width={30}/>
      </div>
      </div> 
      {/* End Top bar */}
      {/* Entites and search functionality */}
      
    <div>
      <div></div>
      <div></div>
      </div> 
      <div className="">
        <DataTable/>
      </div>
      {/* end functionality */}
    </div>
    </div>
  )
}

export default Faculty