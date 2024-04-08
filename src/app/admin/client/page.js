"use client"
import { AdminAuth, LoginAtuh } from '@/app/authentication/Login'
import React from 'react'

const Client = () => {
  LoginAtuh()
  AdminAuth('client')
  return (
    <>
      <div className='py-4'>
        <h2 className='font-semibold text-lg title text-[#000000]'>Client</h2>
      </div>
      <div className='bg-white search-custom-space p-4 main-scroll w-full min-h-[calc(100vh-170px)] h-[380px] overflow-scroll flex flex-col gap-y-4 box-shadow rounded-2xl relative'>
        <div>
fsdfsd
        </div>
      </div>
    </>
  )
}

export default Client