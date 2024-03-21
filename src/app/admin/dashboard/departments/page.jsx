'use client'
import DataTable from "@/app/components/admin/datatable/datatable"
import Image from "next/image"
import { useState } from "react"

const Departments = () => {
  const [popup,setPopup] = useState(false)


  //Department Pop up
  const popupinput =  () => {
    return(
      <div className='fixed inset-0 animate-pop flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='w-[440px] bg-white  rounded-xl '>
              <div className='flex p-2 justify-between items-center rounded-t-xl bg-gradient-to-b text-white from-[var(--primary-color)] to-[var(--secondary-color)]'>
                <h1 className='px-2'>Add Department</h1>
                <Image src={'/admin/Groupwhite.svg'} width={30} height={30} className='cursor-pointer' onClick={()=>setPopup(false)}/>
              </div>
              <div className="px-10 py-5 flex flex-col gap-5">
              <div className='flex items-center'>
                      <label htmlFor="Title" className='font-semibold text-[var(--black-color)] w-[35%]'>Dept. Name</label>
                      <input type="text" className='outline-none border p-1 w-full  rounded pl-2 placeholder:text-sm' placeholder='Input Field' />
                  </div>
              <div className='flex items-center'>
                      <label htmlFor="Title" className='font-semibold text-[var(--black-color)] w-[35%]'>HOD</label>
                      <input type="text" className='outline-none border p-1 w-full  rounded pl-2 placeholder:text-sm' placeholder='Input Field' />
                  </div>
              </div>
                <hr />
                <div className="py-3 px-10 flex justify-end">
                <button className='px-6 py-2 text-white rounded-full bg-[var(--primary-color)] font-semibold hover:bg-[var(--secondary-color)] transition-all duration-300'>Add</button>
                </div>
          </div>
      </div>
    )
  }


  return (
    <div>
      {popup && popupinput()}
      <div className="m-5 rounded-xl shadow-sm shadow-black w-[calc(100%-40px)] overflow-hidden h-[720px]">   
    {/* Top bar title */}
    <div className="flex p-4 items-center justify-between">
      <div className="font-semibold text-lg">
        Departments List
      </div>
      <div className="cursor-pointer" onClick={()=>setPopup(true)}>
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

export default Departments