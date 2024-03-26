'use client'
import './index.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Adminlogin = () => {
    const {push} = useRouter()
    const [formData,setFormData] = useState({email:'',password:''})
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    //On Change Function
    function handleChange(e) {
        const {name,value} = e.target
        setFormData({...formData,[name]: value})
    }   

    async function handleSubmit(e) {
        e.preventDefault()
        const {email,password} = formData
        setLoading(true)
        try {
            const res = await fetch('/api/login',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const data = await res.json()
            if(data.status == 200){
                setLoading(false)
                setError(false)
                push('/admin/dashboard')
            }
            else{
                setLoading(false)
                setError(true)
            }
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }
  return (
    <div className='min-h-screen grid place-items-center'>
       <div className='p-3 lg:w-[80%] sm:w-[100%]  bg-[var(--white-color)] h-[80%] grid md:grid-cols-2 sm:grid-cols-1'>
            <div className='flex flex-col justify-between'>
                <div className='mt-3 flex items-center '>
                    <Image src={'/Logo.svg'} width={50} height={50} alt="Logo" />  
                    <h1 className='ml-3 text-2xl font-bold text-[var(--secondary-color)]'>Publication Management 
System</h1>
                </div>
                <div className='lg:ml-14'>
                    <p className='text-xl font-bold'>Admin Login</p>
                    <form onSubmit={handleSubmit} className='md:w-[90%] lg:w-[70%]'>
                        <div className='relative'>
                        <input type="text" required name='email' onChange={handleChange} className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Company Email or Phone Number'/>
                        <input type="password" required name='password' onChange={handleChange} className='border mt-6 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Password'/>
                        <p className='float-right text-[var(--primary-color)] font-semibold'>Forgot Password?</p>
                        </div>
                        {

                          error &&  <button className='w-[100%] p-2 rounded font-semibold bg-red-500 text-white'>Invalid Credentials</button>
                        }
                        {
                            loading?
                            <button className='w-[100%] p-2 my-2 mt-10 rounded font-semibold bg-[var(--secondary-color)] text-white'>Loading.....</button>:
                            <button className='w-[100%] p-2 my-2 mt-10 rounded font-semibold bg-[var(--primary-color)] text-white'>Login</button>
                        }
                        <p className='mt-10'>Request for a service? <span className='text-[var(--primary-color)] font-semibold'> <Link href={'/admin/auth/register'}>Register here.</Link></span></p>
                    <div className='flex justify-center mt-5 items-center flex-row'>
                <hr className='block w-[35%]'/>
                <p className='text-center text-sm text-[#D0D0D0]'> Provided By <br /> Ammar &amp; Burhan</p>
                <hr className='block w-[35%]'/>
                
                    </div>
                    </form>
                </div>
                <div className='text-[#D0D0D0]'>&copy; 2024 PMS. All Rights Reserved</div>
            </div>
            <div className='rounded-xl hidden sm:hidden md:block imageset'>
            </div>
       </div>
    </div>
  )
}

export default Adminlogin