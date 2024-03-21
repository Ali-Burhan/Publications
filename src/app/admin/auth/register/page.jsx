import './index.css'
import Image from 'next/image'
import Link from 'next/link'
export const metadata = {
    title:'Agency - Request',
    description:'Travel Agency Request'
}
const Adminrequest = () => {
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
                    <form action="" className='md:w-[90%] lg:w-[70%]'>
                        <div className='relative'>
                        <input type="text" className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Enter Your Full Name'/>
                        <input type="text" className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Enter Your Company Name'/>
                        <input type="text" className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Enter Your Email Adress'/>
                        <input type="text" className='border my-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Office Address'/>
                        <input type="text" className='border mt-4 border-[#D0D0D0] p-2 rounded outline-none block w-[100%]' placeholder='Set Password'/>
                        </div>
                        <button className='w-[100%] p-2 my-10 rounded font-semibold bg-[var(--primary-color)] text-white'>Request</button>
                        <p>Already Have An Account? <span className='text-[var(--primary-color)] font-semibold'> <Link href={'/admin/auth/login'}>Login here.</Link></span></p>
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