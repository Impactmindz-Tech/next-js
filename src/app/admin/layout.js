import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/Header'

const AdminLayout = ({ children }) => {
    return (
        <>
            <div className='h-full w-full flex bg-[#fafafa]'>
                <section className='flex flex-col min-h-screen fixed left-0 h-full z-30'>
                    <Sidebar />
                </section>
                <div className='flex flex-1 flex-col test ml-52'>
                    <header className='flex flex-1 flex-col'>
                        <Header />
                    </header>
                    <section className='w-full'>
                        <div className='w-[95%] mx-auto'>
                            {children}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AdminLayout