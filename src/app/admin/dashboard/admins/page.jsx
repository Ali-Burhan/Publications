'use client'
import DataTable from "@/app/components/admin/datatable/datatable"
import Image from "next/image"
import { useEffect, useState } from "react"

const Admins = () => {
  const [popup,setPopup] = useState(false)
  const [getadmins,setAdmins] = useState([])
  const [loading,setLoading] = useState(false)
  async function getAdmins(){
    let headersList = {
      "Accept": "*/*",
     }
     
     let response = await fetch("/api/login", { 
       method: "GET",
       headers: headersList
     });
     
     let data = await response.json();
     console.log(data);
     setAdmins(data.allUser)
  }


  useEffect(()=>{
    getAdmins()
  },[loading])

  // delete admin function
  async function deleteAdmin(id) {
    setLoading(true)
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
     }
     
     let bodyContent = JSON.stringify({
       id
     });
     
     let response = await fetch("/api/login", { 
       method: "DELETE",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.json();
     console.log(data);
     setLoading(false)
  }

  //Department Pop up
  const popupinput =  () => {
    return(
      <div className='fixed inset-0 animate-pop flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='w-[900px] bg-white  rounded-xl '>
              <div className='flex p-2 justify-between items-center rounded-t-xl bg-gradient-to-b text-white from-[var(--primary-color)] to-[var(--secondary-color)]'>
                <h1 className='px-2'>Add Admin</h1>
                <Image src={'/admin/Groupwhite.svg'} width={30} height={30} className='cursor-pointer' onClick={()=>setPopup(false)} alt="image"/>
              </div>
              <div className='py-5 px-10 flex flex-col gap-5'>
                {/* Two inputs div */}
              <div className='grid grid-cols-2 gap-16 mb-1'>

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
                    <label htmlFor="Contact" className='font-semibold text-[var(--black-color)] w-[40%]'>Contact</label>
                    <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Contact' />
                </div>
                <div className='flex items-center'>

                    <label htmlFor="nopub" className='font-semibold text-[var(--black-color)] w-[40%]'>Designation</label>
                    <input type="number" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Designation' />
                </div>
                  </div>
                  <div className='flex flex-col gap-5'>

                  <div className='flex items-center'>
                    <label htmlFor="Edition" className='font-semibold text-[var(--black-color)] w-[40%]'>Admin Role</label>
                    <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Admin Role' />
                </div>
                <div className='flex items-center'>
                    <label htmlFor="Status" className='font-semibold text-[var(--black-color)] w-[40%]'>Department</label>
                    <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Department' />
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
      {popup && popupinput()}
      <div className="m-5 rounded-xl shadow-sm shadow-black w-[calc(100%-40px)] overflow-auto h-[720px]">   
    {/* Top bar title */}
    <div className="flex p-4 items-center justify-between">
      <div className="font-semibold text-lg">
        Admin List
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
      <div className="table-container">
      <table className="data-table">
        <thead className=' bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]  border text-white'>
          <tr>
            <th>
            {/* {
        pages.map((ele,index) => <p key={index}>{ele}</p>)
        } */}
              S.#
            </th>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              Email
            </th>
            <th >
              Status
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {getadmins.map((item,ind) => (
            <tr key={item._id} className=' cursor-pointer border'>
              <td>{ind + 1}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td>{item.status==true?"Approved":"Not Approved"}</td>
              <td className='flex gap-3'>
                <Image src={'/admin/datatableicons/edit.svg'} height={28} alt={item.id} width={28}/>
                {loading && "Deleteing"}
                <Image src={'/admin/datatableicons/delete.svg'} height={28} alt={item.id} width={28} onClick={()=>deleteAdmin(item._id)}/>
                <Image src={'/admin/datatableicons/view.svg'} height={28} alt={item.id} width={28}/>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
      </div>
      {/* end functionality */}
    </div>
    </div>
  )
}

export default Admins