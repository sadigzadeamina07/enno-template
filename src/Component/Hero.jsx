import React from 'react'
import './../index.css'
function Hero() {
  return (
    <>
      <div className="container mx-auto py-[60px] max-w-[1250px] ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-[#5f687b] text-5xl'>Elegant and creative solutions</h1>
            <p className='mt-[5px] mb-[30px]'>We are team of talented designers making websites with Bootstrap</p>
            <div>
              <div className='flex gap-2 items-center'>
                <button className='bg-[#10bc69] w-35 text-white  px-7 py-2  rounded-4xl'><a href="">Get Started</a></button>
                <i class="fa-regular fa-circle-play  text-2xl"></i> <p>Watch Video</p>
                
              </div>
            </div>
          </div>
          <img src="../assets/hero-img.png" alt="" />

        </div>

      </div>
    </>


  )
}

export default Hero