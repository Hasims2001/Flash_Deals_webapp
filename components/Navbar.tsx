import { AlignRight, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
const navigations = [
 
  {
    link: "/",
    title: "Home"
  },
  {
    link: "/trending",
    title: "Trending"
  },
  {
    link: "/about",
    title: "About"
  },
  {
    link: "/contact",
    title: "Contact"
  }
]
export default function Navbar(){
  const [model, setModel] = useState(false);
  return (
    <div className="flex  bg-[#89d3c7] justify-between py-6 items-center px-6 sm:px-16" >
        <div>
          <Link href={"/"}>
        <h1 className='text-3xl'>Flash Deals</h1>
        </Link>
        </div>
        <div className='hidden gap-8 sm:flex' >
            {navigations.map((item, ind)=> (
              <Link href={item.link} key={ind}>{item.title}</Link>
            ))}
        </div>
        <div className='cursor-pointer relative  sm:hidden '>
        {!model && <AlignRight onClick={()=> setModel(!model)} />}
        {model && <X onClick={()=> setModel(!model)} />}
       {model && <div className='absolute right-0 flex flex-col bg-white p-2 rounded-lg gap-2'>
        {navigations.map((item, ind)=> (
              <div key={ind} className=' p-2 '>
                <Link href={item.link}  >{item.title}</Link>
                </div>
            ))}
        </div>}
        </div>
    </div>
  )
}
