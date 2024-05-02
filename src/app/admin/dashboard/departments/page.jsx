'use client'
import DataTable from "@/app/components/admin/datatable/datatable"
import Image from "next/image"
import { useEffect, useState } from "react"

const Departments = () => {
  const [popup,setPopup] = useState(false)
  const [deptname,setDeptName] = useState('')
  const [hod,sethod] = useState('')
  const [loading,setLoading] = useState(false)
  const [departments,setdepartments] = useState([])
  const handleDepartmentSubmit =async (e) => {
    e.preventDefault()
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
       deptname,
         hod
     });
     
     let response = await fetch("/api/department", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.json();
     console.log(data);
     if(data.status == 200){
      setPopup(false)
     }
  }

  const fetchDept = async () => {
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
     }
     
     
     let response = await fetch("/api/department", { 
       method: "GET",
       headers: headersList
     });
     
     let data = await response.json();
     setdepartments(data.dept)
  }

  useEffect(()=>{
    fetchDept()
  },[loading])


  //department delete function
  const handleDelete=async (id)=>{
    setLoading(true)
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
     }
     
     let bodyContent = JSON.stringify({
       id
     });
     
     let response = await fetch("/api/department", { 
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
          <div className='w-[440px] bg-white  rounded-xl '>
              <div className='flex p-2 justify-between items-center rounded-t-xl bg-gradient-to-b text-white from-[var(--primary-color)] to-[var(--secondary-color)]'>
                <h1 className='px-2'>Add Department</h1>
                <Image src={'/admin/Groupwhite.svg'} width={30} height={30} className='cursor-pointer' onClick={()=>setPopup(false)} alt="image"/>
              </div>
              <form onSubmit={handleDepartmentSubmit}>
              <div className="px-10 py-5 flex flex-col gap-5">
              <div className='flex items-center'>
                      <label htmlFor="Title" className='font-semibold text-[var(--black-color)] w-[35%]'>Dept. Name</label>
                      <input type="text" className='outline-none border p-1 w-full  rounded pl-2 placeholder:text-sm' placeholder='Enter Department Name' onChange={(e)=>setDeptName(e.target.value)}/>
                  </div>
              <div className='flex items-center'>
                      <label htmlFor="Title" className='font-semibold text-[var(--black-color)] w-[35%]'>HOD</label>
                      <input type="text" className='outline-none border p-1 w-full  rounded pl-2 placeholder:text-sm' placeholder='Enter HOD Name' onChange={(e)=>sethod(e.target.value)}/>
                  </div>
              </div>
                <hr />
                <div className="py-3 px-10 flex justify-end">
                <button type="submit" className='px-6 py-2 text-white rounded-full bg-[var(--primary-color)] font-semibold hover:bg-[var(--secondary-color)] transition-all duration-300'>Add</button>
                </div>
              </form>
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
      <div className="table-container">
      <table className="data-table">
        <thead className=' bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]  border text-white'>
          <tr>
            <th onClick={()=>sortArrSerial()}>
            {/* {
        pages.map((ele,index) => <p key={index}>{ele}</p>)
        } */}
              S.#
            </th>
            <th onClick={() => sortArrName()}>
              Dept Name
            </th>
            <th onClick={() => sortArrSubtitles()}>
              HOD
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((item,ind) => (
            <tr key={item._id} className='cursor-pointer border'>
              <td>{ind + 1}</td>
              <td>{item.deptname}</td>
              <td>{item.hod}</td>
              <td className='flex gap-3'>
                <Image src={'/admin/datatableicons/edit.svg'} height={28} alt={item.id} width={28}/>
                {loading && "Deleting"}
                <Image src={'/admin/datatableicons/delete.svg'} height={28} alt={item.id} width={28} onClick={()=>handleDelete(item._id)}/>
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

export default Departments