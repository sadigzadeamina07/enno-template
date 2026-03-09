import React from 'react'
function About() {
  return (
<section id='about'>
    <div className="container mx-auto max-w-[1250px] py-[60px]">
      <div className="text-center py-[30px]">
        <h1 className='text-3xl font-semibold text-[#5f687b] uppercase mb-[20px]'>About</h1>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <img src="/assets/about.png" alt="" />
        <div className=''>
          <h3 className='text-3xl mb-[10px] font-raleway font-semibold text-[#5f687b]'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
          <i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. </i>
          <ul className='my-[10px]'>
            <li className='py-2'> <i class="fa-solid fa-check-double text-[#10bc69] mr-[10px]"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li className='py-2'><i class="fa-solid fa-check-double text-[#10bc69] mr-[10px]"></i>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li className='py-2'> <i class="fa-solid fa-check-double text-[#10bc69] mr-[10px]"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
        </div>

      </div>

    </div>
</section>

  )
}

export default About