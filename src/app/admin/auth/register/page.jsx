'use client'
import './index.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Adminrequest = () => {
    const {push} = useRouter()
    const [formData,setFormData] = useState({firstname:'',lastname:'',email:'',password:''})
    const [error,setError] = useState({firstname:'',email:'',password:''})
    const [loading,setLoading] = useState(false)
    const [responseError,setResponseError] = useState(false)

    //validate function
    function validateForm() {
        let isValidate = true
        let errors = {...error}
        if(formData.firstname.trim()===""){
            errors.firstname = "First Name is required"
                isValidate = false
        }else{
            errors.firstname = ""
        }
        
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email.match(emailPattern)) {
      errors.email = 'Invalid email address';
      isValidate = false;
    } else {
      errors.email = '';
    }

    // Validate password
    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValidate = false;
    } else {
      errors.password = '';
    }

    setError(errors);
    return isValidate;

    }

    //onchange function
    function handleChange(e) {
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }
    
    const handleSubmit =async (e) => {
        e.preventDefault();
        setLoading(true)
        const 
        {firstname,lastname,email,password} = formData
        if (validateForm()) {
          try {
            const res = await fetch('/api/signup',{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    firstname,
                    lastname,
                    email,
                    password,
                    status:false
                })
            })
            const data =await res.json()
            if(data.status != 200){
                    setResponseError(true)
                    setLoading(false)
                    setFormData({firstname:'',lastname:'',email:'',password:''})
            }
            else{
                setResponseError(false)
                setLoading(false)
                setFormData({firstname:'',lastname:'',email:'',password:''})
                push('/admin/auth/login')
            
            }
            
          } catch (error) {
            
          } 
        } else {
          
          setLoading(false)
        }
      };
    
  return (
    <div className='min-h-screen  grid place-items-center'>
       <div className='p-3 w-[80%] bg-[var(--white-color)] h-[90%] grid grid-cols-2'>
            <div className='flex flex-col justify-between'>
                <div className='mt-3 flex items-center '>
                    <Image src={'/Logo.svg'} width={50} height={50} alt="Logo" />  
                    <h1 className='ml-3 text-2xl font-bold text-[var(--secondary-color)]'>Publication Management 
System</h1>
                </div>
                <div className='ml-16'>
                    <p className='text-xl font-bold'>Admin Request</p>
                    <form onSubmit={handleSubmit} className='md:w-[90%] lg:w-[70%]'>
                        <div className='relative'>
                        <input type="text" required className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Enter Your First Name' name='firstname' value={formData.firstname} onChange={handleChange} />
                        <input type="text" className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Enter Your Last Name' name='lastname' value={formData.lastname} onChange={handleChange}/>
                        <input type="email" required className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Enter Your Email Adress' name='email' value={formData.email} onChange={handleChange}/>
                        {/* <input type="text" className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Office Address' name='address'/> */}
                        <input type="password" required className='border mt-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Set Password' name='password' value={formData.password} onChange={handleChange}/>
                       {responseError && <p className='mt-2 p-2 bg-red-500 text-white rounded'>Already Exist</p>}
                        </div>
                        { loading?
                            <button className='w-[100%] p-2 mt-10 rounded font-semibold bg-[var(--secondary-color)] text-gray-500'>Please Wait...</button>:
                            <button className='w-[100%] p-2 mt-10 rounded font-semibold bg-[var(--primary-color)] text-white'>Request</button>
                        }
                        {(error.firstname || error.email|| error.password) && <p className=' text-red-500 rounded'>Please fill all the fields correctly</p>}
                        <p className='mt-10'>Already have an account? <span className='text-[var(--primary-color)] font-semibold'> <Link href={'/admin/auth/login'}>Login here.</Link></span></p>
                    <div className='flex justify-center mt-5 items-center flex-row'>
                <hr className='block w-[35%]'/>
                <p className='text-center text-sm text-[#D0D0D0]'> Provided By <br /> Ammar &amp; Burhan</p>
                <hr className='block w-[35%]'/>
                    </div>
                    </form>
                </div>
                <div className='text-[#D0D0D0]'>&copy; 2024 PMS. All Rights Reserved</div>
            </div>
            <div className='rounded-xl imagesetrequest'>
            </div>
       </div>
    </div>
  )
}

export default Adminrequest