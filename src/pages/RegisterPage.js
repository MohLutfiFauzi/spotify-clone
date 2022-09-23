import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import ButtonLoginWith from '../components/ButtonLoginWith'
import Logo from '../components/Logo'
import HrAndOr from '../components/HrAndOr'
import InputLogin from '../components/InputLogin'

const RegisterPage = () => {
    return (
        <>
            <header className='w-full grid place-items-center pt-8'>
                <Logo className='w-24 lg:w-34' />
            </header>
            <main className='max-w-md mx-auto p-2'>
                <h2 className='font-bold text-3xl text-center my-8'>Daftar gratis untuk mulai mendengarkan.</h2>
                <div className='flex flex-col gap-4 mx-2 items-center'>
                    <ButtonLoginWith bgColor='bg-button-fb' color='text-white' className='tracking-normal text-base w-9/12 hover:scale-105 hover:border-none lg:w-11/12' icon={<BsFacebook size='21' />}>Daftar dengan Facebook</ButtonLoginWith>
                    <ButtonLoginWith bgColor='bg-white' color='text-[#6A6A6A]' className='tracking-normal text-base w-9/12 hover:scale-105 border-2 border-[#2e2b2b] hover:border-[#2e2b2b] lg:w-11/12' icon={<FcGoogle size='21' />}>Daftar dengan Google</ButtonLoginWith>
                </div>
                <HrAndOr className='my-6 flex justify-center items-center text-[#7F7F7F] tracking-widest mx-14' />
                <h2 className='font-bold text-lg text-center'>Daftar dengan alamat email</h2>
                <form>
                    <p className='font-bold mt-4 mb-2 text-sm'>Apa email kamu?</p>
                    <InputLogin type='text' placeholder='Masukan email kamu' />
                    <p className='font-bold mt-6 mb-2 text-sm'>Konfirmasi email kamu</p>
                    <InputLogin type='text' placeholder='Masukan lagi email kamu' />
                    <p className='font-bold mt-6 mb-2 text-sm'>Buat kata sandi</p>
                    <InputLogin type='password' placeholder='Buat kata sandi' />
                    <p className='font-bold mt-6 mb-2 text-sm'>Siapa namamu?</p>
                    <InputLogin type='text' placeholder='Masukan nama profil.' />
                    <p className='text-sm mt-2'>Ini akan ditampilkan di di profil kamu.</p>

                    <p className='font-bold mt-6 mb-2 text-sm'>Kapan tanggal lahir kamu?</p>
                    <div className='flex gap-5'>
                        <label className='basis-48 flex flex-col gap-2'>
                            Bulan
                            <InputLogin type='text' placeholder='Bulan' />
                        </label>
                        <label className='basis-24 flex flex-col gap-2'>
                            Hari
                            <InputLogin type='text' placeholder='DD' />
                        </label>
                        <label className='basis-28 flex flex-col gap-2'>
                            Tahun
                            <InputLogin type='text' placeholder='YYYY' />
                        </label>
                    </div>

                    <p className='font-bold mt-6 mb-2 text-sm'>Apa gender kamu?</p>
                    <div className='flex gap-x-6 gap-y-2 flex-wrap'>
                        <label className='flex gap-3'>
                            <input type='radio' />
                            Pria
                        </label>
                        <label className='flex gap-3'>
                            <input type='radio' />
                            Wanita
                        </label >
                        <label className='flex gap-3'>
                            <input type='radio' />
                            Non-biner
                        </label>
                        <label className='flex gap-3'>
                            <input type='radio' />
                            Lainya
                        </label>
                        <label className='flex gap-3'>
                            <input type='radio' />
                            Memilih untuk tidak menjawab
                        </label>
                    </div>

                    <label className='flex gap-3 items-start mt-9'>
                        <input type='checkbox' className='mt-1' />
                        Bagikan data pendaftaran saya kepada penyedia konten Spotify untuk keperluan pemasaran.
                    </label>

                    <div className='flex flex-col gap-3 mt-7'>
                        <p className='text-center text-xs'>
                            Dengan mengklik daftar, kamu menyetujui <span className='text-green-500 underline cursor-pointer'>Persyaratan dan Ketentuan Penggunaan Spotify.</span>
                        </p>

                        <p className='text-center text-xs'>
                            Untuk mempelajari selengkapnya tentang cara Spotify mengumpulkan, menggunakan, membagikan, dan melindungi data pribadimu, <span className='text-green-500 underline cursor-pointer'>baca Kebijakan Privasi Spotify.</span>
                        </p>
                    </div>

                    <ButtonLoginWith bgColor='bg-[#1FDF64]' color='text-black' className='px-8 mt-7 border-none hover:scale-105 mx-auto'>Daftar</ButtonLoginWith>
                    <p className='text-center my-8'>Punya akun? <span className='text-green-500 underline cursor-pointer'>Masuk.</span></p>
                </form>
            </main>
        </>
    )
}

export default RegisterPage