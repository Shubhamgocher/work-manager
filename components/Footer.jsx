'use client'
import Link from "next/link"
import { useEffect } from "react"
const Footer = () => {

  // useEffect(()=>{
  //   async function getData(){
  //     try {
  //        const res=await fetch('/api/login');
  //        const data=await res.json();
  //        console.log("data:",data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getData();

  // },[]);
  return (
    <footer className="bg-orange-400 h-55 flex justify-around">
        <div className="block items-center justify-center mt-5">
            <h1 className="text-2xl font-bold text-blue-800">This is work_manager platform</h1>
            <p className="text-blue-800 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="block items-center justify-center m-5">
            <ul className="text-xl font-bold text-blue-800 underline space-y-2">
                <li>
                    <Link  href={'#'}>
                      Facebook
                    </Link>
                </li>
                <li>
                    <Link  href={'#'}>
                      Linkdin
                    </Link>
                </li>
                <li>
                    <Link  href={'#'}>
                      Instagrams
                    </Link>
                </li>
                <li>
                    <Link  href={'#'}>
                      YouTube
                    </Link>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
