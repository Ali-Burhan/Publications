'use client'
import CardDash from '@/app/components/admin/card'
import DataTable from '@/app/components/admin/datatable/datatable'
import React, { useState } from 'react'
import Image from 'next/image'
import './index.css'
import Selectpubllication from '@/app/components/admin/popup/selectpublication'
const Publications = () => {
    const [publicationpopup,setPublicationpopup] = useState(false)
    const [inputpopup,setInputpopup] = useState(false)
    //Popup of pictures
    const puplicationpop = () =>{

        return(
            <div className='fixed inset-0 animate-pop flex items-center justify-center bg-gray-800 bg-opacity-50'>
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
                        <Selectpubllication setInputpopup={setInputpopup} setPublicationpopup={setPublicationpopup} path={'/admin/research.png'} label={'Research Paper '} />
                        <Selectpubllication setInputpopup={setInputpopup} setPublicationpopup={setPublicationpopup}  path={'/admin/conference.png'} label={'Conference Paper'}/>
                        <Selectpubllication setInputpopup={setInputpopup} setPublicationpopup={setPublicationpopup} path={'/admin/book.png'} label={'Book Chapter'}/>
                        <Selectpubllication setInputpopup={setInputpopup} setPublicationpopup={setPublicationpopup} path={'/admin/funded.png'} label={'Funded Project'}/>
                        <Selectpubllication setInputpopup={setInputpopup} setPublicationpopup={setPublicationpopup} path={'/admin/other.png'} label={'Other'}/>
                    </div>
                    <div>
                    </div>
                    </div>
          </div>
        )
    }

    //Input Popup
    const popupinput =  () => {
      return(
        <div className='fixed inset-0 animate-pop flex items-center justify-center bg-gray-800 bg-opacity-50'>
            <div className='w-[900px] bg-white  rounded-xl '>
                <div className='flex p-2 justify-between items-center rounded-t-xl bg-gradient-to-b text-white from-[var(--primary-color)] to-[var(--secondary-color)]'>
                  <h1>Add Publication</h1>
                  <Image src={'/admin/Groupwhite.svg'} width={30} height={30} className='cursor-pointer' onClick={()=>setInputpopup(false)}/>
                </div>
                <div className='py-5 px-10 flex flex-col gap-5'>
                  {/* //Flat Inputs */}
                  <div className='flex items-center'>
                      <label htmlFor="selectfile" className='font-semibold w-[15%]'>File</label>
                      <input type="file" className='outline-none w-full ' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Title" className='font-semibold w-[15%]'>Title</label>
                      <input type="text" className='outline-none border p-1 w-full rounded placeholder:pl-3' placeholder='Enter Title' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="bookname" className='font-semibold w-[15%]'>Book Name</label>
                      <input type="text" className='outline-none border p-1 rounded w-full placeholder:pl-3' placeholder='Enter Book Name' />
                  </div>

                  {/* Two inputs div */}
                <div className='grid grid-cols-2 gap-16 mb-14'>
                    <div className='flex flex-col gap-5'>
                    <div className='flex items-center'>
                      <label htmlFor="page" className='font-semibold w-[40%]'>Page No.</label>
                      <input type="text" className='outline-none border p-1 rounded w-full placeholder:pl-3' placeholder='Enter Page Number' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Publisher" className='font-semibold w-[40%]'>Publisher</label>
                      <input type="text" className='outline-none border p-1 rounded w-full placeholder:pl-3' placeholder='Enter Publishers' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Author" className='font-semibold w-[40%]'>Author&#40;s&#41;</label>
                      <input type="text" className='outline-none border p-1 rounded ml-5 w-full placeholder:pl-3' placeholder='Enter Author' />
                      <button className='ml-2 py-[2px] px-3 bg-[var(--primary-color)] font-bold text-2xl text-white rounded'>+</button>
                  </div>
                    </div>
                    <div className='flex flex-col gap-5'>

                    <div className='flex items-center'>
                      <label htmlFor="Edition" className='font-semibold w-[40%]'>Edition</label>
                      <input type="text" className='outline-none border p-1 rounded w-full placeholder:pl-3' placeholder='Enter Page Number' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Publication" className='font-semibold w-[40%]'>Year</label>
                      <input type="text" className='outline-none border p-1 rounded w-full placeholder:pl-3' placeholder='Enter Publishers' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Editor" className='font-semibold w-[40%]'>Editor&#40;s&#41;</label>
                      <input type="text" className='outline-none border p-1 rounded ml-5 w-full placeholder:pl-3' placeholder='Enter Author' />
                      <button className='ml-2 py-[2px] px-3 bg-[var(--primary-color)] font-bold text-2xl text-white rounded'>+</button>
                  </div>
                    </div>
                </div>
                <hr />
                <div className='flex justify-end'>
                  <button className='px-6 py-2 text-white rounded-full bg-[var(--primary-color)]'>Add</button>
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
        {publicationpopup && puplicationpop()}
        {inputpopup && popupinput()}
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