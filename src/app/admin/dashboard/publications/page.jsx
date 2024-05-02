'use client'
import CardDash from '@/app/components/admin/card'
import DataTable from '@/app/components/admin/datatable/datatable'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import './index.css'
import Selectpubllication from '@/app/components/admin/popup/selectpublication'
const Publications = () => {
    const [publicationpopup,setPublicationpopup] = useState(false)
    const [inputpopup,setInputpopup] = useState("")   
    const [departments,setdepartments] = useState([])
    const [selectedDept,setSelectedDept] = useState('')
    const [faculty,setfaculty] = useState([])
    const [allPublications,setAllPublications] = useState([])
    const [journalData,setJournalData] = useState({title:"",year:"",impactfactor:"",category:"",auther:"",nfccredit:"",papertype:""})
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
                        <Selectpubllication setInputpopup={setInputpopup} setPublicationpopup={setPublicationpopup} path={'/admin/research.png'} label={'Research Paper'} tag={"research"}/>
                        <Selectpubllication setInputpopup={setInputpopup} setPublicationpopup={setPublicationpopup}  path={'/admin/conference.png'} label={'Conference Paper'} tag={"conference"}/>
                        <Selectpubllication setInputpopup={setInputpopup} setPublicationpopup={setPublicationpopup} path={'/admin/book.png'} label={'Book Chapter'} tag={"book"}/>
                        <Selectpubllication setInputpopup={setInputpopup} setPublicationpopup={setPublicationpopup} path={'/admin/funded.png'} label={'Funded Project'} tag={"other"}/>
                        <Selectpubllication setInputpopup={setInputpopup} setPublicationpopup={setPublicationpopup} path={'/admin/other.png'} label={'Other'} tag={"other"}/>
                    </div>
                    <div>
                    </div>
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
       console.log(data.faculty)
    }

    useEffect(()=>{
      fetchDept()
      fetchFaculty()
      fetchPubs()
    },[])


    // Journal Submits
    async function journalSubmit(e) {
      e.preventDefault()
      const {title,year,impactfactor,category,auther,nfccredit,papertype} = journalData
     
      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
        title,
        year,
        impactfactor,
        category,
        auther,
        nfccredit,
        papertype,
        department:selectedDept
       }
        );
       
       let response = await fetch("/api/journal", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.json();
       console.log(data);
       if(data.status==200){
         setJournalData({title:"",year:"",impactfactor:"",category:"",auther:"",nfccredit:""})
        }
       
    }


    //onchanges
    function onchangeJournal(e) {
      setJournalData({...journalData,[e.target.name]:e.target.value})
      console.log(journalData);
    }

// all publications
async function fetchPubs() {
  let headersList = {
    "Accept": "*/*",
   }
   
   let response = await fetch("/api/journal", { 
     method: "GET",
     headers: headersList
   });
   
   let data = await response.json();
   console.log(data);
   setAllPublications(data.allPublications)
}

    //Input Popup
    const popupinputreseacrh =  () => {

      return(
        <div className='fixed inset-0 animate-pop flex items-center justify-center bg-gray-800 bg-opacity-50'>
            <div className='w-[900px] bg-white  rounded-xl '>
                <div className='flex p-2 justify-between items-center rounded-t-xl bg-gradient-to-b text-white from-[var(--primary-color)] to-[var(--secondary-color)]'>
                  <h1 className='px-2'>Add Journal Article</h1>
                  <Image src={'/admin/Groupwhite.svg'} width={30} height={30} className='cursor-pointer hover:scale-125 transition-all' onClick={()=>setInputpopup(false)}/>
                </div>
                <form onSubmit={journalSubmit}>
                <div className='py-5 px-10 flex flex-col gap-5'>

                  {/* //Flat Inputs */}
                  <div className='grid grid-cols-2 gap-16'>
                  <div className='flex items-center'>
                      <label htmlFor="selectfile" className='font-semibold text-[var(--black-color)] w-[40%]'>Paper Type</label>
                      <select type="file" className='outline-none border p-1 w-full  rounded pl-2' title='Select Your Publish File' name='papertype' value={journalData.papertype} onChange={onchangeJournal}>
                          <option value="">Select paper type</option>
                          <option value="research paper">Research Paper</option>
                          <option value="conference paper">Conference Paper</option>
                      </select>
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="selectfile" className='font-semibold text-[var(--black-color)] w-[15%] text-red-300'>File</label>
                      <input type="file" className='outline-none w-full ' title='Select Your Publish File' disabled/>
                  </div>
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Title" className='font-semibold text-[var(--black-color)] w-[15%]'>Title</label>
                      <input type="text" className='outline-none border p-1 w-full  rounded pl-2 placeholder:text-sm' placeholder='Enter Title' name='title' value={journalData.title} onChange={onchangeJournal}/>
                  </div>
                  {/* <div className='flex items-center'>

                      <label htmlFor="Journal" className='font-semibold text-[var(--black-color)] w-[15%]'>Journal</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Journal' disabled/>
                  </div> */}

                  {/* Two inputs div */}
                <div className='grid grid-cols-2 gap-16'>
                    <div className='flex flex-col gap-5'>
                    {/* <div className='flex items-center'>
                      <label htmlFor="Volumne" className='font-semibold text-[var(--black-color)] w-[40%]'>Volumne</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Volume' />
                  </div> */}
                  <div className='flex items-center'>
                      <label htmlFor="Pages" className='font-semibold text-[var(--black-color)] w-[40%]'>Department</label>
                      <select type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Pages' onChange={(e)=>setSelectedDept(e.target.value)}>
                        <option value="">Select Department </option>
                        {departments.map((ele,ind)=>(
                          <option key={ind} value={ele._id}>
                                {ele.deptname}
                          </option>
                        ))}
                      </select>
                  </div>
                  
                  <div className='flex items-center'>
                      <label htmlFor="Year" className='font-semibold text-[var(--black-color)] w-[40%]'>Year</label>
                      <input type="text" maxLength={4} className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Year' name='year' value={journalData.year} onChange={onchangeJournal}/>
                  </div>
                  {journalData.papertype == 'research paper' &&
                  <div className='flex items-center'>
                      <label htmlFor="Year" className='font-semibold text-[var(--black-color)] w-[40%]'>Category</label>
                      <select type="text" maxLength={4} className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Year' name='category' value={journalData.category} onChange={onchangeJournal}>
                        <option value="1">Category</option>
                        <option value="W">W</option>
                        <option value="X">X</option>
                        <option value="Y">Y</option>
                      </select>
                  </div>
                  }
                  {/* <div className='flex items-center'>
                      <label htmlFor="Pages" className='font-semibold text-[var(--black-color)] w-[40%]'>Pages</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Pages' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="ISSN" className='font-semibold text-[var(--black-color)] w-[40%]'>ISSN</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter ISSN' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Author" className='font-semibold text-[var(--black-color)] w-[40%]'>Author&#40;s&#41;</label>
                      <input type="text" className='outline-none border p-1 rounded ml-5 w-full  pl-2 placeholder:text-sm' placeholder='Enter Author' />
                      <button className='ml-2 py-[1px] px-[9px] bg-[var(--primary-color)] font-bold text-2xl text-white rounded hover:bg-[var(--secondary-color)] transition-all duration-300' title='You Can Add More'>+</button>
                  </div> */}
                    </div>
                    <div className='flex flex-col gap-5'>

                    <div className='flex items-center'>
                     {
                        selectedDept &&
                        <>
                       <label htmlFor="Pages" className='font-semibold text-[var(--black-color)] w-[40%]'>Auther</label>
                      <select type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Pages' name='auther' value={journalData.auther} onChange={onchangeJournal}>
                        <option value="">Select Teacher</option>
                        {faculty.map((ele,ind)=>(
                          ele.departmentid  == selectedDept?
                            <option value={ele.name} key={ind}>
                            {ele.name}
                            {/* {ele.name} */}
                            </option>
                            :null
                        ))}
                      </select>
                        </>
                      }
                  </div>
                  
                  <div className='flex items-center'>
                      <label htmlFor="Year" className='font-semibold text-[var(--black-color)] w-[40%]'>NFC Credit</label>
                      <select type="text" maxLength={4} className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Year' name='nfccredit' value={journalData.nfccredit} onChange={onchangeJournal}>
                        <option value="">Select Category</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                  </div>
                  
                  {journalData.papertype == 'research paper' &&
                  <div className='flex items-center'>
                      <label htmlFor="Year" className='font-semibold text-[var(--black-color)] w-[40%]'>I. F.</label>
                      <input type="number" maxLength={4} className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Year' name='impactfactor' value={journalData.impactfactor} onChange={onchangeJournal}/>
                  </div>
    }
                  {/* <div className='flex items-center'>
                      <label htmlFor="Issue" className='font-semibold text-[var(--black-color)] w-[40%]'>Issue</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Issue' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Editor" className='font-semibold text-[var(--black-color)] w-[40%]'>DOI</label>
                      <input type="text" className='outline-none border p-1 rounded w-full pl-2 placeholder:text-sm' placeholder='Enter DOI' />
                  </div> */}
                    </div>
                </div>
                {/* note input */}
                {/* <div className='flex items-center '>
                      <label htmlFor="jouranalnotes" className='w-[15%] font-semibold text-[var(--black-color)]'>Notes</label>
                      <textarea name="journalnotes" id="journalnotes" cols="30" rows="4" placeholder='Enter Any Notes' className='border w-full rounded outline-none p-1 pl-2'/>
                </div> */}
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
    const popupinputconference =  () => {

      return(
        <div className='fixed inset-0 animate-pop flex items-center justify-center bg-gray-800 bg-opacity-50'>
            <div className='w-[900px] bg-white  rounded-xl '>
                <div className='flex p-2 justify-between items-center rounded-t-xl bg-gradient-to-b text-white from-[var(--primary-color)] to-[var(--secondary-color)]'>
                  <h1 className='px-2'>Add Conference Paper</h1>
                  <Image src={'/admin/Groupwhite.svg'} width={30} height={30} className='cursor-pointer hover:scale-125 transition-all' onClick={()=>setInputpopup(false)}/>
                </div>
                <div className='py-5 px-10 flex flex-col gap-5'>
                  {/* //Flat Inputs */}
                  <div className='flex items-center'>

                      <label htmlFor="selectfile" className='font-semibold text-[var(--black-color)] w-[15%]'>File</label>
                      <input type="file" className='outline-none w-full ' title='Select Your Publish File'/>
                  </div>
                  <div className='flex items-center'>

                      <label htmlFor="Title" className='font-semibold text-[var(--black-color)] w-[15%]'>Title</label>
                      <input type="text" className='outline-none border p-1 w-full  rounded pl-2 placeholder:text-sm' placeholder='Enter Title' />
                  </div>
                  <div className='flex items-center'>

                      <label htmlFor="bookname" className='font-semibold text-[var(--black-color)] w-[15%]'>Conference Name</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Conference  Name' />
                  </div>

                  {/* Two inputs div */}
                <div className='grid grid-cols-2 gap-16'>


                    <div className='flex flex-col gap-5'>

                    <div className='flex items-center'>
                      <label htmlFor="ConferenceLocation" className='font-semibold text-[var(--black-color)] w-[40%]'>Conference Location</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Conference Location' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Year" className='font-semibold text-[var(--black-color)] w-[40%]'>Year</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Year' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Issue" className='font-semibold text-[var(--black-color)] w-[40%]'>Issue</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Issue' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="ISSN" className='font-semibold text-[var(--black-color)] w-[40%]'>ISSN</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter ISSN' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Author" className='font-semibold text-[var(--black-color)] w-[40%]'>Author&#40;s&#41;</label>
                      <input type="text" className='outline-none border p-1 rounded ml-5 w-full  pl-2 placeholder:text-sm' placeholder='Enter Author' />
                      <button className='ml-2 py-[1px] px-[9px] bg-[var(--primary-color)] font-bold text-2xl text-white rounded hover:bg-[var(--secondary-color)] transition-all duration-300' title='You Can Add More'>+</button>
                  </div>
                    </div>
                    <div className='flex flex-col gap-5'>

                    <div className='flex items-center'>
                      <label htmlFor="Pages" className='font-semibold text-[var(--black-color)] w-[40%]'>Pages</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Pages' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Date" className='font-semibold text-[var(--black-color)] w-[40%]'>Date</label>
                      <input type="date" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Date' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Volumne" className='font-semibold text-[var(--black-color)] w-[40%]'>Volumne</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Volume' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="DOI" className='font-semibold text-[var(--black-color)] w-[40%]'>DOI</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter DOI' />
                  </div>
                    </div>
                </div>
                <div className='flex items-center '>
                      <label htmlFor="jouranalnotes" className='w-[15%] font-semibold text-[var(--black-color)]'>Notes</label>
                      <textarea name="journalnotes" id="journalnotes" cols="30" rows="4" placeholder='Enter Any Notes' className='border w-full rounded outline-none p-1 pl-2'/>
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
    const popupinputbooksection =  () => {



      return(
        <div className='fixed inset-0 animate-pop flex items-center justify-center bg-gray-800 bg-opacity-50'>
            <div className='w-[900px] bg-white  rounded-xl '>
                <div className='flex p-2 justify-between items-center rounded-t-xl bg-gradient-to-b text-white from-[var(--primary-color)] to-[var(--secondary-color)]'>
                  <h1 className='px-2'>Add Book Section</h1>
                  <Image src={'/admin/Groupwhite.svg'} width={30} height={30} className='cursor-pointer hover:scale-125 transition-all' onClick={()=>setInputpopup(false)}/>
                </div>
                <div className='py-5 px-10 flex flex-col gap-5'>
                  {/* //Flat Inputs */}
                  <div className='flex items-center'>

                      <label htmlFor="selectfile" className='font-semibold text-[var(--black-color)] w-[15%]'>File</label>
                      <input type="file" className='outline-none w-full ' title='Select File'/>
                  </div>
                  <div className='flex items-center'>

                      <label htmlFor="Title" className='font-semibold text-[var(--black-color)] w-[15%]'>Title</label>
                      <input type="text" className='outline-none border p-1 w-full  rounded pl-2 placeholder:text-sm' placeholder='Enter Title' />
                  </div>
                  <div className='flex items-center'>

                      <label htmlFor="bookname" className='font-semibold text-[var(--black-color)] w-[15%]'>Book Title</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Book Title' />
                  </div>

                  {/* Two inputs div */}
                <div className='grid grid-cols-2 gap-16'>

                    <div className='flex flex-col gap-5'>

                    <div className='flex items-center'>
                      <label htmlFor="Publishers" className='font-semibold text-[var(--black-color)] w-[40%]'>Publishers</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Publishers' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Edition" className='font-semibold text-[var(--black-color)] w-[40%]'>Edition</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Edition' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Volumne" className='font-semibold text-[var(--black-color)] w-[40%]'>Volumne</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Volumne' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="ISSN" className='font-semibold text-[var(--black-color)] w-[40%]'>ISSN</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter ISSN' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Year" className='font-semibold text-[var(--black-color)] w-[40%]'>Year</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Year' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Author" className='font-semibold text-[var(--black-color)] w-[40%]'>Author&#40;s&#41;</label>
                      <input type="text" className='outline-none border p-1 rounded ml-5 w-full  pl-2 placeholder:text-sm' placeholder='Enter Author' />
                      <button className='ml-2 py-[1px] px-[9px] bg-[var(--primary-color)] font-bold text-2xl text-white rounded hover:bg-[var(--secondary-color)] transition-all duration-300' title='You Can Add More'>+</button>
                  </div>
                    </div>
                    <div className='flex flex-col gap-5'>

                    <div className='flex items-center'>
                      <label htmlFor="PublishPlace" className='font-semibold text-[var(--black-color)] w-[40%]'>Publish Place</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Publish Place' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Chapter" className='font-semibold text-[var(--black-color)] w-[40%]'>Chapter</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Chapter' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Pages" className='font-semibold text-[var(--black-color)] w-[40%]'>Pages</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Pages' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="DOI" className='font-semibold text-[var(--black-color)] w-[40%]'>DOI</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter DOI' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Editor" className='font-semibold text-[var(--black-color)] w-[40%]'>Editor&#40;s&#41;</label>
                      <input type="text" className='outline-none border p-1 rounded ml-5 w-full  pl-2 placeholder:text-sm' placeholder='Enter Editor' />
                      <button className='ml-2 py-[1px] px-[9px] bg-[var(--primary-color)] font-bold text-2xl text-white rounded hover:bg-[var(--secondary-color)] transition-all duration-300' title='You Can Add More'>+</button>
                  </div>
                    </div>
                </div>
                <div className='flex items-center '>
                      <label htmlFor="jouranalnotes" className='w-[15%] font-semibold text-[var(--black-color)]'>Notes</label>
                      <textarea name="journalnotes" id="journalnotes" cols="30" rows="4" placeholder='Enter Any Notes' className='border w-full rounded outline-none p-1 pl-2'/>
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
    const popupinput =  () => {



      return(
        <div className='fixed inset-0 animate-pop flex items-center justify-center bg-gray-800 bg-opacity-50'>
            <div className='w-[900px] bg-white  rounded-xl '>
                <div className='flex p-2 justify-between items-center rounded-t-xl bg-gradient-to-b text-white from-[var(--primary-color)] to-[var(--secondary-color)]'>
                  <h1 className='px-2'>Add</h1>
                  <Image src={'/admin/Groupwhite.svg'} width={30} height={30} className='cursor-pointer hover:scale-125 transition-all' onClick={()=>setInputpopup(false)}/>
                </div>
                <div className='py-5 px-10 flex flex-col gap-5'>
                  {/* //Flat Inputs */}
                  <div className='flex items-center'>
                      <label htmlFor="selectfile" className='font-semibold text-[var(--black-color)] w-[15%]'>File</label>
                      <input type="file" className='outline-none w-full ' title='Select Your Publish File'/>
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Title" className='font-semibold text-[var(--black-color)] w-[15%]'>Title</label>
                      <input type="text" className='outline-none border p-1 w-full  rounded pl-2 placeholder:text-sm' placeholder='Enter Title' />
                  </div>
                  

                  {/* Two inputs div */}
                <div className='grid grid-cols-2 gap-16'>

                    <div className='flex flex-col gap-5'>

                    <div className='flex items-center'>
                      <label htmlFor="Volumne" className='font-semibold text-[var(--black-color)] w-[40%]'>Volumne</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Volumne' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Year" className='font-semibold text-[var(--black-color)] w-[40%]'>Year</label>
                      <input type="date" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Year' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="ISSN" className='font-semibold text-[var(--black-color)] w-[40%]'>ISSN</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter ISSN' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Author" className='font-semibold text-[var(--black-color)] w-[40%]'>Author&#40;s&#41;</label>
                      <input type="text" className='outline-none border p-1 rounded ml-5 w-full  pl-2 placeholder:text-sm' placeholder='Enter Author' />
                      <button className='ml-2 py-[1px] px-[9px] bg-[var(--primary-color)] font-bold text-2xl text-white rounded hover:bg-[var(--secondary-color)] transition-all duration-300' title='You Can Add More'>+</button>
                  </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                    <div className='flex items-center'>
                      <label htmlFor="Pages" className='font-semibold text-[var(--black-color)] w-[40%]'>Pages</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Pages' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Issue" className='font-semibold text-[var(--black-color)] w-[40%]'>Issue</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter Issue' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="DOI" className='font-semibold text-[var(--black-color)] w-[40%]'>DOI</label>
                      <input type="text" className='outline-none border p-1 rounded w-full  pl-2 placeholder:text-sm' placeholder='Enter DOI' />
                  </div>
                  <div className='flex items-center'>
                      <label htmlFor="Editor" className='font-semibold text-[var(--black-color)] w-[40%]'>Editor&#40;s&#41;</label>
                      <input type="text" className='outline-none border p-1 rounded ml-5 w-full  pl-2 placeholder:text-sm' placeholder='Enter Editor' />
                      <button className='ml-2 py-[1px] px-[9px] bg-[var(--primary-color)] font-bold text-2xl text-white rounded hover:bg-[var(--secondary-color)] transition-all duration-300' title='You Can Add More'>+</button>
                  </div>
                    </div>
                </div>
                <div className='flex items-center '>

                      <label htmlFor="jouranalnotes" className='w-[15%] font-semibold text-[var(--black-color)]'>Notes</label>
                      <textarea name="journalnotes" id="journalnotes" cols="30" rows="4" placeholder='Enter Any Notes' className='border w-full rounded outline-none p-1 pl-2'/>
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
    const planalertpopUp = () => {
        return (
          <div className='fixed inset-0 animate-pop flex items-center justify-center bg-gray-800 bg-opacity-50'>
                <div className='bg-white w-[300px] h-[200px] rounded-xl border-2 border-red-500'>
                  <div className='flex justify-between p-2'>
                    <h1></h1>
                <Image src={'/admin/Groupwhite.svg'} width={30} height={30} className='cursor-pointer hover:scale-125 transition-all' onClick={()=>setInputpopup(false)}/>
                  </div>
                  <div className='flex flex-col gap-4 justify-center items-center'>
                      <h1 className='text-red-500 font-semibold text-2xl'>Restricted</h1>
                      <h1 className=''>Please upgrade your plan</h1>
                      <button className='px-6 py-1 bg-blue-400 rounded text-white' onClick={()=>setInputpopup(false)}>Ok</button>
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
        {inputpopup == "research" && popupinputreseacrh()}
        {inputpopup == "conference" && popupinputconference()}
        {/* {inputpopup == "book" && popupinputbooksection()}
        {inputpopup == "other" && popupinput()} */}
        {inputpopup == "book" && planalertpopUp()}
        {inputpopup == "other" && planalertpopUp()}
        
        
      </div> <div className="m-5 rounded-xl shadow-sm shadow-black w-[calc(100%-40px)] overflow-auto h-[720px]">   
    {/* Top bar title */}
    <div className="flex p-4 items-center justify-between">
      <div className="font-semibold text-lg">
        Publications  List
      </div>
      <div className="cursor-pointer" onClick={()=>setPublicationpopup(true)}>
          <Image src={'/admin/Group.png'} alt="Customer Pic" className='hover:scale-110 transition-all' height={30} width={30}/>
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
            <th >
            {/* {
        pages.map((ele,index) => <p key={index}>{ele}</p>)
        } */}
              S.#
            </th>
            <th >
              Title
            </th>
            <th >
              Auther
            </th>
            <th >
              Category
            </th>
            <th >
              I. F.
            </th>
            <th >
            Year
            </th>
            <th >
            NFC Credit
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allPublications.map((item,ind) => (
            <tr key={item._id} className=' cursor-pointer border'>
              <td>{ind + 1}</td>
              
              {/* <td>{item.department}</td> */}
              <td>{item.title}</td>
              <td>{item.auther}</td>
              <td>{item.category}</td>
              <td>{item.impactfactor}</td>
              <td>{item.year}</td>
              <td className='centre'>{item.nfccredit == 1?<p className='p-1 bg-green-400 text-white text-center rounded w-14'>Yes</p>:<p className='p-1 bg-red-400 text-white text-center rounded w-14'>No</p>}</td>
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

export default Publications