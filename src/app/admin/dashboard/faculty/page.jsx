'use client'
import CardDash from '@/app/components/admin/card'
import DataTable from '@/app/components/admin/datatable/datatable'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
const Faculty = () => {
    const [inputpopup,setInputpopup] = useState(false)
    const [departments,setdepartments] = useState([])
    const [faculty,setfaculty] = useState([])
    const [formData,setFormData] = useState({name:"",departmentid:'',contact:'',status:'',designation:'',email:''})
    function handleChange(e) {
      setFormData({...formData,[e.target.name]:e.target.value})
      console.log(formData);
    }
    //Popup of pictures
const handleSubmit = async (e) => {
  e.preventDefault();
  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
   }
   
   let bodyContent = JSON.stringify(formData);
   
   let response = await fetch("/api/faculty", { 
     method: "POST",
     body: bodyContent,
     headers: headersList
   });
   
   let data = await response.json();
   console.log(data);
   if(data.status == 200){
    setFormData({name:"",departmentid:'',contact:'',status:'',designation:'',email:''})
    setInputpopup(false)
   }
   
}
    //Input Popup
    const popupinput =  () => {

      return(
        <div className='fixed inset-0 animate-pop flex items-center justify-center bg-gray-800 bg-opacity-50'>
            <div className='w-[900px] bg-white  rounded-xl'>
                <div className='flex p-2 justify-between items-center rounded-t-xl bg-gradient-to-b text-white from-[var(--primary-color)] to-[var(--secondary-color)]'>
                  <h1 className='px-2'>Add Faculty Member</h1>
                  <Image src={'/admin/Groupwhite.svg'} width={30} height={30} className='cursor-pointer' onClick={()=>setInputpopup(false)} alt='image'/>
                </div>
                <form onSubmit={handleSubmit}>
                <div className='py-8 px-10 flex flex-col gap-5'>
                  {/* Two inputs div */}
                <div className='grid grid-cols-2 gap-16 mb-7'>
                    <div className='flex flex-col gap-5'>
                    <div className='flex items-center'>
                      <label htmlFor="Name" className='font-semibold text-[var(--black-color)] w-[40%]'>Name</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Name' name='name' value={formData.name} onChange={handleChange}/>
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Grade" className='font-semibold text-[var(--black-color)] w-[40%]'>Grade</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Grade' disabled/>
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Departments" className='font-semibold text-[var(--black-color)] w-[40%]'>Departments</label>
                      <select type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Departments' name='departmentid' value={formData.departmentid} onChange={handleChange}>
                        <option value="">Select Department</option>
                        {departments.map((ele,ind)=>(
                          <option key={ind} value={ele._id}>{ele.deptname}</option>
                        ))
                        }
                      </select>
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Contact" className='font-semibold text-[var(--black-color)] w-[40%]'>Contact</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Contact' name='contact' value={formData.contact} onChange={handleChange}/>
                  </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                  <div className='flex items-center'>
                      <label htmlFor="Status" className='font-semibold text-[var(--black-color)] w-[40%]'>Status</label>
                      <input type="number" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Status'  name='status' value={formData.status} onChange={handleChange} disabled/>
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Designation" className='font-semibold text-[var(--black-color)] w-[40%]'>Designation</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Designation'  name='designation' value={formData.designation} onChange={handleChange}/>
                  </div>
                  <div className='flex items-center'>

                      <label htmlFor="Email" className='font-semibold text-[var(--black-color)] w-[40%]'>Email</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Email'  name='email' value={formData.email} onChange={handleChange}/>
                  </div>
                    </div>
                </div>
                <hr />
                <div className='flex justify-end'>
                  <button className='px-6 py-2 text-white rounded-full bg-[var(--primary-color)] font-semibold hover:bg-[var(--secondary-color)] transition-all duration-300'>Add</button>
                </div>
                </div>
                </form>
            </div>
        </div>
      )
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
    const fetchFaculty = async () => {
      
      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
       }
       let response = await fetch("/api/faculty", { 
         method: "GET",
         headers: headersList
       });
       
       let data = await response.json();
       setfaculty(data.faculty)
    }

    useEffect(()=>{
      fetchDept()
      fetchFaculty()
    },[])

    return (
    <div>
        <div className="flex justify-evenly gap-3 mt-5 flex-wrap my-4">
        <CardDash label='Total Faculty' number={faculty.length}/>
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
              Name
            </th>
            <th>
              Designation
            </th>
            <th >
              Email
            </th>
            <th>
              Department
            </th>
            <th>
            Contact
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((item,ind) => (
            <tr key={item._id} className=' cursor-pointer border'>
              <td>{ind + 1}</td>
              <td>{item.name}</td>
              <td>{item.designation}</td>
              <td>{item.email}</td>
              <td>{
              departments.length>0 &&  departments.map((ele)=>ele._id == item.departmentid? ele.deptname:"")
                }</td>
              <td>{item.contact}</td>
              <td className='flex gap-3 cursor-not-allowed'>
                <Image src={'/admin/datatableicons/edit.svg'} height={28} alt={item.id} width={28}/>
                <Image src={'/admin/datatableicons/delete.svg'} height={28} alt={item.id} width={28}/>
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

export default Faculty