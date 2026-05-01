'use client'
import { authClient } from '@/lib/auth-client'; 
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
   const [loading, setLoading] = useState(false);
   const router = useRouter();
   const [isShowPassword, setIsShowPassword] = useState(false);

   const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);

      const email = e.target.email.value;
      const password = e.target.password.value;

      try {
         const { data, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/", 
         });

         if (error) {
           
            toast.error(error.message || "Login failed. Please check your credentials.");
         } else {
            
            toast.success("Logged in successfully! Redirecting...");
            
            setTimeout(() => {
               router.push('/');
               router.refresh();
            }, 2000);
         }
      } catch (err) {
         toast.error("An unexpected error occurred.");
         console.error(err);
      } finally {
         setLoading(false);
      }
   }

   return (
      <div className='min-h-screen bg-gray-100 flex justify-center items-center p-4'>
        
         <ToastContainer position="top-right" autoClose={3000} />

         <div className='w-full max-w-md p-8 bg-white rounded-2xl shadow-lg'>
            
            <div className='flex justify-center mb-6'>
               <div className='p-4 rounded-full bg-blue-50 flex justify-center items-center w-16 h-16'>
                  <h2 className='text-2xl font-bold text-blue-600'>L</h2>
               </div>
            </div>

            <h1 className='text-2xl font-bold text-center mb-6 text-gray-800'>Login to Account</h1>

            <form className='space-y-4' onSubmit={handleLogin}>
               <div>
                  <label className='block text-sm font-medium text-gray-700'>Email</label>
                  <input 
                     name='email'
                     type="email" 
                     required
                     disabled={loading}
                     className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-50'
                     placeholder='example@mail.com'
                  />
               </div>

               <div className='relative'>
                  <label className='block text-sm font-medium text-gray-700'>Password</label>
                  <input 
                     name='password'
                     type={isShowPassword ? 'text' : 'password'} 
                     required
                     disabled={loading}
                     className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-50'
                     placeholder='••••••••'
                  />
            
                  <button 
                     type="button"
                     onClick={() => setIsShowPassword(!isShowPassword)}
                     className='absolute right-3 top-10 text-xs font-semibold text-gray-500 hover:text-blue-600'
                  >
                     {isShowPassword ? 'HIDE' : 'SHOW'}
                  </button>
               </div>

               <button 
                  type="submit" 
                  disabled={loading}
                  className='w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white p-3 rounded-lg font-semibold hover:opacity-90 transition disabled:bg-blue-400'
               >
                  {loading ? 'Logging in...' : 'Login'}
               </button>
            </form>

            <p className='mt-4 text-center text-sm text-gray-600'>
               Do not have an account? <Link href='/register' className='text-blue-600 font-semibold hover:underline'>Sign Up</Link>
            </p>
         </div>
      </div>
   );
};

export default LoginPage;