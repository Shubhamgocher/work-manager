'react'

import Link from "next/link"

const Header = () => {
  return (
    <nav className="bg-black w-100 h-14 flex justify-between items-center">
        <div className="text-white font-bold text-2xl px-2">
            <Link href={'/'}>Work_Manager</Link>
        </div>
        <div className="text-blue-500 text-xl space-x-4 underline"> 
            <Link href={'/'}>Home</Link>
            <Link href={'/myTask'}>My_Task</Link>
            <Link href={'/addTask'}>Add_Task</Link>
        </div>
        <div className="text-blue-500 text-xl space-x-4 px-2 underline">
            <Link href={'/login'}>Login</Link>
            
            <Link href={'/signup'}>SignUp</Link>
        </div>

    </nav>
  )
}

export default Header
