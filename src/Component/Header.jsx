import { useState } from 'react'
import './../index.css'
function Header() {
  const [menuOpen,setMenuOpen]=useState(false)
const openMenu=()=> (
  setMenuOpen(!menuOpen)

)
const closemenu=()=>(
  setMenuOpen(false)
)
  return (
    <>
        <div className="container mx-auto max-w-[1250px] ">
          <div className="flex items-center justify-between py-5">
            <h1 className='text-[#5f687b] text-[40px] font-bold text-2xl'>eNno</h1>
            <div className='flex items-center gap-7'>
              <ul className=' hidden  font-ubuntu text-[#5f687b] lg:flex  gap-7'>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Dropdown</a></li>
                <li><a href="">Contact</a></li>
              </ul>
              <div onClick={openMenu} className='lg:hidden '>
                <i class="fa-solid fa-bars  "></i>
              </div>
              <button className='bg-[#10bc69] text-white  px-7 py-2  rounded-4xl'><a href="">Get Started</a></button>
            </div>
             
          </div>

        </div>
        {menuOpen &&  <ul className=' absolute   left-1/2 top-[90px] w-[90%] p-2  rounded-2xl   -translate-x-1/2  bg-white font-ubuntu  gap-7'>
              <i onClick={closemenu} className="fa-solid fa-xmark"></i>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Dropdown</a></li>
                <li><a href="">Contact</a></li>
                
              </ul> }
    </>
  )
}

export default Header