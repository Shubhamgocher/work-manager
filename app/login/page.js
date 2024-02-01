'use client'
import Image from "next/image";
import login_img from '../../public/Login.svg'
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import UserContext from "@/context/UserContext";

function Login(){
    const router=useRouter();
    const {user,setUser}=useContext(UserContext);
    const [userLoginData,setUserLoginData]=useState({
        email:"",
        password:""
    })
    async function handleLogin(e){
        e.preventDefault();
        try {
            const res=await fetch('/api/login',{
                method:"POST",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(userLoginData)
            });
            const result=await res.json();
            //console.log(result);
            toast.success("Login Sucessfully",{
                position:'top-center'
            });
            setUser(result.user);
            router.push('/login');
            
            setUserLoginData({
                email:"",
                password:""
            })
        } catch (error) {
            //console.log("E",Error);
            toast.error("Invalid user ! Either password or email incorrect",{
                position:'top-center'
            })
            
        }
    


    }
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4 col-start-5 mt-6">
                <div className="p-6 bg-slate-800">
                <div className='flex items-center justify-center mb-2'>
                    <Image 
                    src={login_img}
                    alt='signup_image'
                    height={200}
                    width={200}

                    />
                    </div>
                   <h1 className="text-white text-3xl font-bold text-center">
                    Login Here
                   </h1>
                   <form action={'#!'} onSubmit={handleLogin}>
                        <div className="mt-6">
                            <label htmlFor="user_name" className="block text-white text-xl mb-2">
                             Email
                            </label>
                            <input 
                               type="email"
                               placeholder="Email.."
                               id="user_email"
                               className="w-full px-2 h-8 border border-gray-200  bg-gray-500 rounded-lg focus:ring-blue-500 text-white text-sm font-bold  "
                               name="user_email"
                               onChange={(e)=>setUserLoginData({...userLoginData,email:e.target.value})}
                               value={userLoginData.email}
                            />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="user_name" className="block text-white text-xl mb-2">
                             Password
                            </label>
                            <input 
                               type="password"
                               placeholder="password.."
                               id="user_password"
                               className="w-full px-2 h-8 border border-gray-200  bg-gray-500 rounded-lg focus:ring-blue-500 text-white text-sm font-bold  "
                               name="user_password"
                               onChange={(e)=>setUserLoginData({...userLoginData,password:e.target.value})}
                               value={userLoginData.password}
                            />
                        </div>
                        <div className='text-center mt-3'>
                            <button className='bg-blue-500 p-2 rounded-lg text-white text-xl font-bold hover:bg-blue-200'>
                                Login
                            </button>
                            <button className='bg-red-500 p-2 rounded-lg text-white text-xl font-bold hover:bg-red-200 ml-3'>
                                Reset
                            </button>

                        </div>
                   </form>
                   
                </div>
            </div>
        </div>
    )
}
export default Login;