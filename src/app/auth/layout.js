import React from 'react'
import logo from '../../../public/logo.png'
import Image from 'next/image'

const layout = ({ children }) => {
    return (
        <>
            <section className='w-full h-screen bg-main p-8'>
                <div className='w-full h-full bg-white rounded-3xl p-8 flex gap-x-6'>
                    <div className='flex-1 items-center justify-center border border-[#E5B3B2] rounded-3xl hidden sm:flex'>
                        <Image src={logo} />
                    </div>
                    <div className='flex-1'>
                        {children}
                    </div>
                </div>
            </section>
        </>
    )
}

export default layout