'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
   const router = useRouter();
   const [loading, setLoading] = useState(false);
   
  
   const [isShowPassword, setIsShowPassword] = useState(false);

   const handleRegister = async (e) => {
      e.preventDefault();
      setLoading(true);

      const name = e.target.name.value;
      const photo = e.target.photourl.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      try {
         const { data, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
         });

         if (error) {
            alert(error.message || "Registration failed");
         } else {
            console.log("Registered successfully:", data);
            router.push('/login');
         }
      } catch (err) {
         console.error("Signup error:", err);
      } finally {
         setLoading(false);
      }
   };

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
             
               <div>
                  <label className='block text-sm font-medium text-gray-700'>Full Name</label>
                  <input name='name' type="text" required disabled={loading}
                     className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                     placeholder='John Doe'
                  />
               </div>

             
               <div>
                  <label className='block text-sm font-medium text-gray-700'>Photo URL</label>
                  <input name='photourl' type="url" required disabled={loading}
                     className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                     placeholder='https://example.com/photo.jpg'
                  />
               </div>

               
               <div>
                  <label className='block text-sm font-medium text-gray-700'>Email Address</label>
                  <input name='email' type="email" required disabled={loading}
                     className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                     placeholder='example@mail.com'
                  />
               </div>

             
               <div>
                  <label className='block text-sm font-medium text-gray-700'>Password</label>
                  <div className='relative'>
                     <input 
                        name='password' 
                        type={isShowPassword ? 'text' : 'password'} 
                        required 
                        disabled={loading}
                        className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
                        placeholder='••••••••'
                     />
                     <button 
                        type="button"
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        className='absolute right-3 top-1/2 -translate-y-1/2 mt-0.5 text-sm font-semibold text-blue-600 hover:text-blue-800'
                     >
                        {isShowPassword ? "Hide" : "Show"}
                     </button>
                  </div>
               </div>

               <button 
                  type="submit" 
                  disabled={loading}
                  className='w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-blue-400'
               >
                  {loading ? 'Registering...' : 'Register'}
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