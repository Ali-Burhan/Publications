const Traficchart = () => {
  return (
    <div className='py-3 px-2 h-[250px] w-[220px] border border-[#D0D0D0] rounded-lg flex flex-col justify-evenly items-center'>
         <p className='font-semibold'>Categories</p>
        <div className='flex w-[100%] '>
          <div className='w-[25%]'>
          <p>3578</p>
          </div>  
          <p>Research Papers</p>
        </div>
        <div className='flex w-[100%] '>
          <div className='w-[25%]'>

          <p>2035</p>
          </div>
          <p>Conference Papers</p>
        </div>
        <div className='flex w-[100%] '>
          <div className='w-[25%]'>

          <p>8247</p>
          </div>
          <p>Book Chapters</p>

        </div>
        <div className='flex w-[100%] '>
          <div className='w-[25%]'>

          <p>1998</p>
          </div>
          <p>Funded Projects</p>
        </div>
        <div className='flex w-[100%] '>
          <div className='w-[25%]'>

          <p>1539</p>
          </div>
          <p>Others</p>
        </div>
    </div>
  )
}

export default Traficchart