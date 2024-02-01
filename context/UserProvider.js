'use client'
import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
import { toast } from 'react-toastify'
const UserProvider = ({children}) => {
  const [user,setUser]=useState(undefined);
  useEffect(()=>{
    async function getData(){
    try {
        const res=await fetch('/api/login');
        const data=await res.json();
        console.log(data);
        setUser({...data});
    } catch (error) {
      console.log(error);
      // toast.error("Unable to load user");
      setUser(undefined);
      
    }

    }
    getData();

  },[]);
  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
