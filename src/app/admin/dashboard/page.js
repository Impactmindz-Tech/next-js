"use client"
import { AdminAuth, LoginAtuh } from '@/app/authentication/Login'
import { dashboardget } from '@/utils/api'
import React, { useEffect, useState } from 'react'


const dashboard = () => {

  LoginAtuh()
  AdminAuth('dashboard')
  const [dataa , setdataa ] = useState('')

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await dashboardget();
        setdataa(data)
        console.log(data)
      } catch (error) {
        console.log(error , "dashboard")
      }
    }
    getUser()
  }, [])



  return (
    <>
      <div className='py-4'>
        <h2 className='font-semibold text-lg title text-[#000000]'>Dashboard</h2>
      </div>
      <div className='bg-white no-scrollbar p-4 search-custom-space main-scroll w-full min-h-[calc(100vh-170px)] h-[380px] overflow-scroll flex flex-col gap-y-4 box-shadow rounded-2xl relative'>
        dsdsfd
      </div>
    </>
  )
}

export default dashboard