'use client'
import { useContext, useState } from 'react'
import form from '../../public/form.svg'
import Image from 'next/image'
import {  toast } from 'react-toastify'
import React from 'react'
import UserContext from '@/context/UserContext'





const Add_Task = () => {
  const {user,setuser}=useContext(UserContext);
  
  const [task,setTask]=useState({
    title:"",
    content:"",
    status:"none",
    userId:"user._id"
  });
  async function handleAddTask(e){
    e.preventDefault();
       try {
         const res=await fetch('/api/tasks',{
          method:'POST',
          headers:{
            'Content-type':"application/json"
          },
          body:JSON.stringify(task)
         
         });
         
          const result=await res.json();
          console.log(result);
          toast.success('Task added successfully',{
            position:'top-center'
          });
          
         
         
         setTask({
          title:"",
          content:"",
          status:"none",
          userId:""
        })
       } catch (error) {
        console.log("Error",error)
        toast.error("Failed to Added task",{
          position:'top-center'
        })
        
       }
       

  }
  return (
    <div className=" grid grid-cols-12  m-6 text-white">
      
      <div className="col-span-4 col-start-5 mt-6">
        <div className='p-5 bg-slate-800'>
        <div className='flex justify-center items-center'>
          <Image src={form} alt='form image'height={200} width={200}/>
        </div>
      <div className="flex justify-center items-center mt-3">
        <h1 className="text-white text-3xl font-bold text-center">Add Task Here</h1>
      </div>
      <form  onSubmit={handleAddTask} >
        
      
      <div className="mt-3">
        <label htmlFor={'Title'} className="block text-white text-xl mb-2">
            Title
        </label>
        <input
          type="text"
          id='task_title'
          placeholder='title..'
          className="w-full px-2 h-8 border border-gray-200  bg-gray-500 rounded-lg focus:ring-blue-500 text-white text-sm font-bold "
          name='task_title'
          onChange={(e)=>setTask({...task,title:e.target.value})}
          value={task.title}
        >
        
        </input>
      </div>
      <div className="mt-3">
        <label className="block text-white text-xl mb-2 ">
            Content
        </label>
        <textarea
          
          id='task_content'
          placeholder='about_task...'
          className="w-full px-2  border border-gray-200  bg-gray-500 rounded-lg focus:ring-blue-500 text-white text-sm font-bold"
          rows={8}
          name='task_content'
          onChange={(e)=>setTask({...task,content:e.target.value})}
          value={task.content}
        >
        
        </textarea>
      </div>
      <div className="mt-3">
        <label className="block text-white text-xl mb-2">
            Status
        </label>
        <select 
        id='task_status'
        className="w-full px-2 h-8 border border-gray-200  bg-gray-500 rounded-lg focus:ring-blue-500 text-white text-sm font-bold"
        name='task_staus'
        onChange={(e)=>setTask({...task,status:e.target.value})}
        value={task.status}>
        <option value='none' none="true" disabled className="text-white text-sm ">
          ---status---
        </option>
        <option value='pending' className="text-white text-sm">
          pending
        </option>
        <option value="completed" className="text-white text-sm">
          completed
        </option>
        </select>
      </div>
       <div className='flex items-center justify-center mt-3'>
        <button type="submit" className='bg-blue-600 rounded-lg p-2 text-white font-bold hover:bg-blue-200'>Add Task</button>
        <button className='bg-red-600 rounded-lg p-2 text-white font-bold hover:bg-red-200 ml-2'>Clear</button>
       </div>
       
      </form>
        </div>
      
      </div>
    </div>
  )
}

export default Add_Task
