import { dashboardget } from '@/utils/api'
import React from 'react'


const dashboard = async () => {
  const data = await  dashboardget();
  console.log(data)


  return (
    <>
      <div className='py-4'>
        <h2 className='font-semibold text-lg title text-[#000000]'>Dashboard</h2>
      </div>
      <div className='bg-white search-custom-space main-scroll w-full min-h-[calc(100vh-170px)] h-[380px] overflow-scroll flex flex-col gap-y-4 box-shadow rounded-2xl relative'>
        dashboard
      </div>
    </>
  )
}

export default dashboard