'use client'
import Link from 'next/link';
import React from 'react';

const RegisterPage = () => {

   const handleRegister = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const photo = e.target.photourl.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      
      console.log({ name, photo, email, password });
      // Akhane apni Firebase ba Auth logic likhte parben
   }

    return (
      <div className='min-h-screen bg-gray-100 flex justify-center items-center p-4'>
        <div className='w-full max-w-md p-8 bg-white rounded-2xl shadow-lg'>
            
            <div className='flex justify-center mb-6'>
                <div className='p-4 rounded-full bg-blue-50 flex justify-center items-center w-16 h-16'>
                    <span className='text-2xl font-bold text-blue-600'>R</span>
                </div>
            </div>

            <h1 className='text-2xl font-bold text-center mb-6 text-gray-800'>Create Account</h1>

            <form className='space-y-4' onSubmit={handleRegister}>
                {/* Name Field */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Full Name</label>
                    <input name='name' type="text" required
                        className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                        placeholder='John Doe'
                    />
                </div>

                {/* Photo URL Field */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Photo URL</label>
                    <input name='photourl' type="url" required
                        className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                        placeholder='https://example.com/photo.jpg'
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Email Address</label>
                    <input name='email' type="email" required
                        className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                        placeholder='example@mail.com'
                    />
                </div>

                {/* Password Field */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Password</label>
                    <input name='password' type="password" required
                        className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                        placeholder='••••••••'
                    />
                </div>

                <button type="submit" className='w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition'>
                    Register
                </button>
            </form>

            <p className='mt-6 text-center text-sm text-gray-600'>
                Already have an account? <Link href="/login" className='text-blue-600 font-semibold hover:underline'>Login</Link>
            </p>
        </div>
      </div>
    );
};

export default RegisterPage;