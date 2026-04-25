'use client'
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {

   const handelLoginFunc = (e) =>{
      e.preventDefault();
      const email = e.target.email.value
      const password = e.target.password.value
      console.log(email, password  )
   }


    return (
      <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
    <div className='container max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg'>
        
        <div className='flex justify-center mb-6'>
            <div className='p-4 rounded-full bg-blue-50 flex justify-center items-center w-16 h-16'>
                <h2 className='text-2xl font-bold text-blue-600'>L</h2>
            </div>
        </div>

        <h1 className='text-2xl font-bold text-center mb-6 text-gray-800'>Login to Account</h1>

        <form className='space-y-4' onSubmit={handelLoginFunc}>
            <div>
                <label className='block text-sm font-medium text-gray-700'>Email</label>
                <input name='email'
                    type="email" 
                    className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                    placeholder='example@mail.com'
                />
            </div>

            <div>
                <label className='block text-sm font-medium text-gray-700'>Password</label>
                <input name='password'
                    type="password" 
                    className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                    placeholder='••••••••'
                />
            </div>

            <button className='w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition'>
                Login
            </button>
        </form>

        <p className='mt-4 text-center text-sm text-gray-600'>
            Don't have an account? <Link href={'/register'} className='text-blue-600 cursor-pointer'>Sign Up</Link>
        </p>
    </div>
</div>
    );
};

export default LoginPage;