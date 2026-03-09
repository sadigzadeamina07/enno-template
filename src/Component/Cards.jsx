import React from 'react'

function Cards() {
  return (
<>
   <div className="container mx-auto  text-[#5f687b] py-[60px] max-w-[1250px] ">
          <div className=" grid grid-cols-1 mx-[20px] lg:grid-cols-3 gap-5">
            <div className="bg-[#f8f8f8] px-[30px] py-[50px] ">
              <i class="fa-light fa-wave-pulse mb-[10px] text-[36px] text-[#10bc69]"></i>
              <p className='mb-[10px] font-bold text-[20px] hover:text-[#10bc69]'>Lorem Ipsum</p>
              <p className=''>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
             <div className="bg-[#f8f8f8] px-[30px] py-[50px] ">
                          <i class="fa-regular fa-square mb-[10px] text-[36px] text-[#10bc69]"></i>
              <p className='mb-[10px] font-bold text-[20px] hover:text-[#10bc69]'>Lorem Ipsum</p>
              <p className=''>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
             <div className="bg-[#f8f8f8] px-[30px] py-[50px] ">
              <i class="fa-light fa-calendar  mb-[10px] text-[36px] text-[#10bc69]"></i>'
              <p className='mb-[10px] font-bold text-[20px] hover:text-[#10bc69]'>Lorem Ipsum</p>
              <p className=''>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>

          </div>
        </div>
  

</>
  )
}

export default Cards