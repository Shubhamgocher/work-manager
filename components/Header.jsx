'use client'
import { toast } from "react-toastify"
import userContext  from "@/context/UserContext"
import Link from "next/link"
import { useContext } from "react"

const Header = () => {
  const {user,setUser}=useContext(userContext);
  console.log("user:",user);
  const handleLogout=async ()=>{
    try {
        const res=await fetch('/api/logout',{
          method:"POST",
        })
        const data=res.json();
        console.log(data);
        setUser(undefined);

    } catch (error) {
      console.log(error);
      toast.error("Failed to logout");
      
    }

  }
  return (
    <nav className="bg-orange-400 w-100 h-14 flex justify-between items-center">
        <div className="text-white font-bold text-2xl px-2">
            <Link href={'/'}>Work_Manager</Link>
        </div>
        {
          user && (
            
            
            <div className="text-blue-800 text-xl space-x-4 underline"> 
            <Link href={'/'}>Home</Link>
            <Link href={'/myTask'}>My_Task</Link>
            <Link href={'/addTask'}>Add_Task</Link>
            </div>
        
          )
        }
        {
          user && (
            
            <div className="flex text-white text-xl space-x-4 mr-2"> 
            <h1>{user?.name}</h1>
            <button onClick={handleLogout} className="bg-blue-500 rounded-lg p-1 font-bold">LogOut</button>
            </div>

          )
            
            

          
        }
        {!user && (
          <div className="text-blue-800 text-xl space-x-4 underline"> 
          <Link href={'/login'}>Login</Link>
          <Link href={'/signup'}>SignUp</Link>
        </div>
        )}
        

    </nav>
  )
}

export default Header
