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
  <div className="container mx-auto  max-w-[1250px] ">
    <div className="grid grid-cols-2">
      <div className='flex flex-col justify-center'>
<h1 className='font-bold text-[#5f687b] text-5xl'>Elegant and creative solutions</h1>
<p className='mt-[5px] mb-[30px]'>We are team of talented designers making websites with Bootstrap</p>

<button className='bg-[#10bc69] w-35 text-white  px-7 py-2  rounded-4xl'><a href="">Get Started</a></button>
      </div>
<img src="../assets/hero-img.png" alt="" />
    </div>

  </div>
 </main>

    </>
  )
}
export default App
