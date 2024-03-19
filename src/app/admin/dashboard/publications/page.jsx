'use client'
import CardDash from '@/app/components/admin/card'
import DataTable from '@/app/components/admin/datatable/datatable'
import React, { useState } from 'react'
import Image from 'next/image'
import './index.css'
import Selectpubllication from '@/app/components/admin/popup/selectpublication'
const Publications = () => {
    const [publicationpopup,setPublicationpopup] = useState(false)

    const puplicationpop = () =>{
        return(
            <div className='fixed inset-0 animate-pop  flex items-center justify-center bg-gray-800 bg-opacity-50'>
                {/* pop up body */}
                    <div className='flex flex-col w-[900px] items-center shadow-xl'>
                        {/* pop up heading */}
                        <div className=' rounded-t-xl flex bg-gradient-to-b w-full  from-[var(--primary-color)] to-[var(--secondary-color)]'>
                    <h1 className=' text-center  w-full p-3 text-white'>Select Publication</h1>
                    <Image
                    src={'/admin/Groupwhite.svg'}
                    height={40}
                    width={40}
                    onClick={()=>setPublicationpopup(false)}
                    className='cursor-pointer'
                    />
                        </div>
                    {/* pop up content */}
                    <div className='flex justify-evenly py-6 w-full gap-5  rounded-b-xl bg-white'>
                        <Selectpubllication path={'/admin/research.png'} label={'Research Paper '}/>
                        <Selectpubllication path={'/admin/conference.png'} label={'Conference Paper'}/>
                        <Selectpubllication path={'/admin/book.png'} label={'Book Chapter'}/>
                        <Selectpubllication path={'/admin/funded.png'} label={'Funded Project'}/>
                        <Selectpubllication path={'/admin/other.png'} label={'Other'}/>
                    </div>
                    <div>
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
        {publicationpopup && puplicationpop()}
      </div> <div className="m-5 rounded-xl shadow-sm shadow-black w-[calc(100%-40px)] overflow-hidden h-[720px]">   
    {/* Top bar title */}
    <div className="flex p-4 items-center justify-between">
      <div className="font-semibold text-lg">
        Customers Lists
      </div>
      <div className="cursor-pointer" onClick={()=>setPublicationpopup(true)}>
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

export default Publications