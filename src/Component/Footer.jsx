import React from 'react'

function Footer() {
  return (
    <div className='max-w-[1250px] container  mx-auto'>

      <div className="grid grid-cols-1 text-center  md:text-left md:grid-cols-5 py-[50px]">
        <div className="">
          <h3 className='text-[#5f687b] text-[20px] font-semibold text-2xl mb-[10px]'>eNno</h3>
          <a href='' className=''>A108 Adam Street

            New York, NY 535022</a>
          <ul className='flex flex-col gap-2 mt-[10px]'>
            <li><a href="">+1 5589 55488 55</a></li>
            <li><a href="">info@example.com</a></li>
          </ul>
        </div>
        <div className="">
          <h3 className='text-[#5f687b] text-[20px] font-semibold text-2xl mb-[10px]'>Useful Links</h3>
          <ul className='flex flex-col gap-2'>
            <li><a href=""><i class="fal fa-angle-right"></i>Home</a></li>
            <li><a href=""><i class="fal fa-angle-right"></i>About us</a></li>
            <li><a href=""><i class="fal fa-angle-right"></i>Services</a></li>
            <li><a href=""><i class="fal fa-angle-right"></i>Terms of service</a></li>
          </ul>
        </div>
        <div className="">
          <h3 className='text-[#5f687b] text-[20px] font-semibold text-2xl mb-[10px]'>Our Services</h3>
          <ul className='flex flex-col gap-2'>
            <li><a href=""><i class="fal fa-angle-right"></i>Web Design</a></li>
            <li><a href=""><i class="fal fa-angle-right"></i>Web Development</a></li>
            <li><a href=""> <i class="fal fa-angle-right"></i>Product Management</a></li>
            <li><a href=""> <i class="fal fa-angle-right"></i>Marketing</a></li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h3 className='text-[#5f687b] text-[20px] font-semibold text-2xl mb-[10px]'>Follow Us</h3>
          <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
          <ul className='flex gap-5 justify-center md:justify-start'>
            <li><a href=""><i class="fa-brands fa-x-twitter"></i></a></li>
            <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <hr className='text-gray-200' />
      <div className="text-center">
        <p className='mb-[10px]'>© Copyright eNno All Rights Reserved</p>
        <p>Designed by BootstrapMade Distributed by ThemeWagon</p>
      </div>

    </div>
  )
}

export default Footer