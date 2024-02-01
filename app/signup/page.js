'use client'
import { useState } from 'react';
import Sign_Up from '../../public/Sign_Up.svg'
import Image from 'next/image';
import { toast } from 'react-toastify';
function SignUp(){
    const [userData,setuserData]=useState({
        name:"",
        email:"",
        password:"",
        about:""
    })
    const handleSignUp=async (e)=>{
        e.preventDefault();
        
        try {
            const res=await fetch('/api/users',{
                method:"POST",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(userData)
            });
            const data=await res.json();
            console.log(data);
            
            
            toast.success('user created successfully',{
                position:'top-center'
            })
        } catch (error) {
            console.log(error);
            toast.error('Failed to create error',{
                position:'top-center'
            })
        }
            
            
        

    }
    const handleReset=()=>{
        setuserData({
            name:"",
            email:"",
            password:"",
            about:""
        })
    }
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4 col-start-5 mt-6">
                <div className="p-5 bg-slate-800">
                    <div className='flex items-center justify-center mb-2'>
                    <Image 
                    src={Sign_Up}
                    alt='signup_image'
                    height={200}
                    width={200}

                    />
                    </div>
                    <h1 className="text-white text-3xl font-bold text-center">
                        SignUp Here
                    </h1>
                    <form action="#1" onSubmit={handleSignUp}>
                        <div className='mt-3'>
                            <label htmlFor="user_name" className="block text-white text-xl mb-2">
                             Name
                            </label>
                            <input 
                               type="text"
                               placeholder="Name"
                               id="user_name"
                               className="w-full px-2 h-8 border border-gray-200  bg-gray-500 rounded-lg focus:ring-blue-500 text-white text-sm font-bold"
                               name='user_name'
                               onChange={(e)=>setuserData({...userData,name:e.target.value})}
                               value={userData.name}
                            />

                            
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="user_email" className="block text-white text-xl mb-2">
                             Email
                            </label>
                            <input 
                               type="email"
                               placeholder="Email.."
                               id="user_email"
                               className="w-full px-2 h-8 border border-gray-200  bg-gray-500 rounded-lg focus:ring-blue-500 text-white text-sm font-bold  "
                               name='user_email'
                               onChange={(e)=>setuserData({...userData,email:e.target.value})}
                               value={userData.email}
                            />

                            
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="user_password" className="block text-white text-xl mb-2">
                             Password
                            </label>
                            <input 
                               type="password"
                               placeholder="password.."
                               id="user_password"
                               className="w-full px-2 h-8 border border-gray-200  bg-gray-500 rounded-lg focus:ring-blue-500 text-white text-sm font-bold  "
                               name='user_password'
                               onChange={(e)=>setuserData({...userData,password:e.target.value})}
                               value={userData.password}
                            />

                            
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="user_name" className="block text-white text-xl mb-2">
                             About
                            </label>
                            <textarea
                               id="user_about"
                               rows={8}
                               placeholder="About...."
                               className="w-full px-2  border border-gray-200  bg-gray-500 rounded-lg focus:ring-blue-500 text-white text-sm font-bold  "
                               name='user_about'
                               onChange={(e)=>setuserData({...userData,about:e.target.value})}
                               value={userData.about}
                            >

                            </textarea>

                        </div>
                        <div className='text-center mt-3'>
                            <button type='submit' className='bg-blue-500 p-2 rounded-lg text-white text-xl font-bold hover:bg-blue-200'>
                                SignUp
                            </button>
                            <button type='button' onClick={handleReset} className='bg-red-500 p-2 rounded-lg text-white text-xl font-bold hover:bg-red-200 ml-3'>
                                Reset
                            </button>

                        </div>
                        {/* {JSON.stringify(userData)} */}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignUp;