import './index.css'
function App() {

  return (
    <>
      <header className=''>
        <div className="container mx-auto max-w-[1250px] ">
          <div className="flex items-center justify-between py-5">
            <h1 className='text-[#5f687b] text-[40px] font-bold text-2xl'>eNno</h1>
            <div className='flex items-center gap-7'>
              <ul className=' hidden  font-ubuntu text-[#5f687b] md:flex  gap-7'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Dropdown</a></li>
                <li><a href="">Contact</a></li>
              </ul>
              <div className='md:hidden '>
                <i class="fa-solid fa-bars  "></i>
              </div>

              <button className='bg-[#10bc69] text-white  px-7 py-2  rounded-4xl'><a href="">Get Started</a></button>
            </div>


          </div>


        </div>

      </header>
      <main>
        <div className="container mx-auto py-[60px] max-w-[1250px] ">
          <div className="grid grid-cols-2">
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
        <div className="container mx-auto  text-[#5f687b] py-[60px] max-w-[1250px] ">
          <div className=" grid grid-cols-3 gap-5">
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
        <div className="container mx-auto max-w-[1250px]">
<div className="text-center">
<h1>About</h1>
<p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div>

<div className='grid grid-cols-2'>
  <img src="/assets/about.png" alt="" />
  <div className=''>
 <p>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</p>
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. </p>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
              <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
  </div>
 
</div>

        </div>
      </main>

    </>
  )
}
export default App
