'use client'
import CardDash from '@/app/components/admin/card';
import Barcharts from '@/app/components/admin/charts/barcharts';
import Linechart from '@/app/components/admin/charts/linechart';
import Piechart from '@/app/components/admin/charts/piechart';
import Traficchart from '@/app/components/admin/charts/traficchart';
const Page = () => {
  return (
    <div>
    <div className='flex justify-evenly gap-3 mt-5 flex-wrap'>
      <CardDash/> 
      <CardDash/> 
      <CardDash/> 
      <CardDash/> 
    </div>
    <div className='flex flex-wrap justify-evenly py-4 items-center'>
  <Linechart/>
  <Traficchart/>
    </div>
    <div className='flex flex-wrap ml-6 justify-evenly py-4 items-center'>
      <Barcharts/>
      <Piechart/>
    </div>
  </div>
  )
}

export default Page