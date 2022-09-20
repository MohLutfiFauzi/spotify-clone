import React from 'react'
import Logo from '../components/Logo'
import ButtonLoginWith from '../components/ButtonLoginWith'
import { ImAppleinc, ImFacebook2, ImGoogle } from 'react-icons/im'
import HrAndOr from '../components/HrAndOr'
import InputLogin from '../components/InputLogin'
import CheckBoxLogin from '../components/CheckBoxLogin'

const LoginPage = () => {
    return (
        <>
            <header className='w-full grid place-items-center py-4 border-b md:py-6'>
                <Logo className='w-34 md:w-47' />
            </header>
            <main className='max-w-md mx-auto p-2'>
                <p className='font-bold text-center mt-11 mb-4 text-sm'>Untuk melanjutkan, masuk ke Spotify.</p>
                <div className='flex flex-col gap-3'>
                    <ButtonLoginWith bgColor='bg-button-fb' color='text-white' icon={<ImFacebook2 />}>  LANJUTKAN DENGAN FACEBOOK</ButtonLoginWith>
                    <ButtonLoginWith bgColor='bg-button-apple' color='text-white' icon={<ImAppleinc />}> LANJUTKAN DENGAN APPLE</ButtonLoginWith>
                    <ButtonLoginWith bgColor='bg-white' color='text-[#6A6A6A]' icon={<ImGoogle />}> LANJUTKAN DENGAN GOOGLE</ButtonLoginWith>
                </div>
                <HrAndOr className='mt-6' />
                <form>
                    <p className='font-bold mt-7 mb-4 text-sm'>Alamat email atau nama pengguna</p>
                    <InputLogin />
                    <p className='font-bold mt-6 mb-4 text-sm'>Kata sandi</p>
                    <InputLogin type='password' />
                    <a href='#w' className='block mt-6 mb-4 text-sm'>Lupa kata sandimu?</a>
                </form>
                <div className='flex flex-col md:justify-between md:flex-row'>
                    <CheckBoxLogin>Ingat aku</CheckBoxLogin>
                    <ButtonLoginWith bgColor='bg-[#1FDF64]' color='text-black' className='px-8 mt-7 border-none hover:scale-105 md:mt-0 '>MASUK</ButtonLoginWith>
                </div>
                <hr className='mt-5' />
                <p className='font-bold text-center mt-5 mb-4'>Tidak punya akun?</p>
                <ButtonLoginWith bgColor='bg-white' color='text-[#6A6A6A]' className='mb-3 w-full '>MENDAFTAR KE SPOTIFY</ButtonLoginWith>
            </main>
        </>
    )
}

export default LoginPage