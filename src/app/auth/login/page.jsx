"use client"
import Link from 'next/link'
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { profileValidation } from '@/utils/validation/FormValidation';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LoginPage } from '@/utils/api';
import { setLocalStorage } from '@/utils/LocalStorageUtills';
import toast, { Toaster } from 'react-hot-toast';
import { LoginAtuh } from '@/app/authentication/Login';

const page = () => {
    LoginAtuh()
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(profileValidation) });
    const router = useRouter();

    const onSubmit = async (data) => {
        const body = {
            username: data.user,
            password: data.password
        }
        try {
            const data = await LoginPage(body)
                setLocalStorage('token', data.token)
                router.push('/admin/dashboard')
                toast.success("Success")
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error, 'tinku')
        }
    }

    return (
        <>
            <div className='2xl:max-w-[335px] w-full max-w-[270px] mx-auto h-full flex flex-col justify-center items-center'>
                <div className='flex flex-col gap-y-2'>
                    <h2 className='font-bold text-base heading'>Log In</h2>
                    <h4 className='2xl:text-base font-semibold text-xs'>Welcome back!</h4>
                    <p className='text-[12px] 2xl:text-base text-input-placeholder'>Please enter your email and password to sign in</p>
                    <form className='flex flex-col ' onSubmit={handleSubmit(onSubmit)} >
                        <div className='2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative mt-2'>
                            <label className='2xl:text-sm absolute bg-white text-input-label -top-2 left-5 text-[11px] px-1'>Email</label>
                            <Image width={12} height={12} src="http://beautyspot.codingcopz.in/static/media/email.78db72a51f6c96abe7fe0564c5e1850f.svg" />
                            <input className='w-full outline-none text-[12px] text-input-placeholder' placeholder='michellejohnson125@gmail.com' name='user' type='text' {...register('user')} />
                        </div>
                        <p>{errors.user?.message}</p>
                        <div className='2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative mt-2'>
                            <label className='2xl:text-sm absolute bg-white text-input-label -top-2 left-5 text-[11px] px-1'>Password</label>
                            <Image width={12} height={12} src="http://beautyspot.codingcopz.in/static/media/email.78db72a51f6c96abe7fe0564c5e1850f.svg" />
                            <input className='w-full outline-none text-[12px] text-input-placeholder' type='text' name='password' placeholder='********' {...register('password')} />
                        </div>
                        <p>{errors.password?.message}</p>
                        <Link href={''} className="text-[11px] my-2 mr-2 text-input-placeholder w-max ml-auto">Forgot Password ?</Link>
                        <button className='sign-in text-center mt-6 bg-[#E5B3B2] w-max mx-auto text-white text-[10px] px-12 py-3 rounded-lg flex items-center gap-x-2'>Sign In</button>
                    </form>
                </div>
                <Toaster />
            </div>
        </>
    )
}

export default page