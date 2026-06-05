import React from 'react'

function SubscribeCards() {
  return (
    <section>
        <div className='container'>
            <div className='bg-[#f9f9ff] pb-20 flex flex-col md:flex-row items-center gap-12 justify-center'>
                <div className='bg-white p-12 border drop-shadow-2xl rounded-xl border-[#D9E3F7] max-w-106 hover:-translate-y-6 duration-500 transition-all delay-100'>
                    <div className='pb-6'>
                    <h2 className='text-[#121C2A] font-semibold font-playFair text-[28px]'>Basic Artisan</h2>
                    <div>
                        <span className='text-[#121C2A] font-bold text-[56px] font-playFair'>$o</span>
                        <span className='text-[#584237] font-plusJakarta'>/forever</span>
                    </div>
                    <p className='text-[#584237] font-plusJakarta'>Perfect for casual home cooks exploring new flavors.</p>
                    </div>
                    <div className='pb-12'>
                        <ul className='flex flex-col gap-4'>
                            <li className='flex items-center gap-3'>       
                                <div className='w-3.75 h-3.75 bg-[#9D4300] rounded-full text-white flex items-center justify-center'>
                                <i class="fa-solid fa-check fa-2xs"></i>
                                </div>        
                                <p className='text-[#121C2A] font-plusJakarta'>Access to basic recipes</p> 
                            </li>
                            <li className='flex items-center gap-3'>       
                                <div className='w-3.75 h-3.75 bg-[#9D4300] rounded-full text-white flex items-center justify-center'>
                                <i className="fa-solid fa-check fa-2xs"></i>
                                </div>        
                                <p className='text-[#121C2A] font-plusJakarta'>Community forums access</p> 
                            </li>
                            <li className='flex items-center gap-3'>       
                                <div className='w-3.75 h-3.75 rounded-full text-[#584237] border border-[#584237] flex items-center justify-center'>
                                <i class="fa-solid fa-x fa-2xs"></i>
                                </div>        
                                <p className='text-[#584237] font-plusJakarta'>Ad-supported browsing</p> 
                            </li>
                        </ul>
                    </div>
                    <div className='pt-12'>
                    <button className='py-3 px-6 w-full border-2 border-[#9D4300] 
                    rounded-lg font-plusJakarta text-sm cursor-pointer
                     text-[#9D4300] font-semibold hover:bg-[#9D4300]/20 hover:-translate-y-0.5 hover:scale-105 transition-all
                     duration-300'>
                        Current Plan
                    </button>
                    </div>
            </div>
                <div className='bg-white p-12 border-2 drop-shadow-2xl rounded-xl border-[#9D4300] max-w-106 relative hover:-translate-y-6 duration-500 transition-all delay-100'>
                    <div className='text-white bg-[#9D4300] rounded-full text-center text-xs font-bold font-plusJakarta px-4 py-1 w-33.5 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                        <h2>MOST POPULAR</h2>
                    </div>
                    <div className='pb-6'>
                    <h2 className='text-[#9D4300] font-semibold font-playFair text-[28px]'>Master Chef</h2>
                    <div>
                        <span className='text-[#121C2A] font-bold text-[56px] font-playFair'>$9.99</span>
                        <span className='text-[#584237] font-plusJakarta'>/month</span>
                    </div>
                    <p className='text-[#584237] font-plusJakarta'>For culinary enthusiasts demanding the ultimate experience.</p>
                    </div>
                    <div className='pb-12'>
                        <ul className='flex flex-col gap-4'>
                            <li className='flex items-center gap-3'>       
                                <div className='w-3.75 h-3.75 bg-[#9D4300] rounded-full text-white flex items-center justify-center'>
                                <i class="fa-solid fa-check fa-2xs"></i>
                                </div>        
                                <p className='text-[#121C2A] font-semibold font-plusJakarta'>Ad-free seamless experience</p> 
                            </li>
                            <li className='flex items-center gap-3'>       
                                <div className='w-3.75 h-3.75 bg-[#9D4300] rounded-full text-white flex items-center justify-center'>
                                <i class="fa-solid fa-check fa-2xs"></i>
                                </div>        
                                <p className='text-[#121C2A] font-semibold font-plusJakarta'>Exclusive premium recipes</p> 
                            </li>
                            <li className='flex items-center gap-3'>       
                                <div className='w-3.75 h-3.75 bg-[#9D4300] rounded-full text-white flex items-center justify-center'>
                                <i class="fa-solid fa-check fa-2xs"></i>
                                </div>        
                                <p className='text-[#121C2A] font-semibold font-plusJakarta'>Offline access & downloads</p> 
                            </li>
                            <li className='flex items-center gap-3'>       
                                <div className='w-3.75 h-3.75 bg-[#9D4300] rounded-full text-white flex items-center justify-center'>
                                <i class="fa-solid fa-check fa-2xs"></i>
                                </div>        
                                <p className='text-[#121C2A] font-semibold font-plusJakarta'>Monthly video masterclasses</p> 
                            </li>
                        </ul>
                    </div>
                    <div>
                    <button className='py-3 px-6 w-full
                    rounded-lg font-plusJakarta text-sm cursor-pointer
                     text-[#F9F9F9] bg-[#9D4300] drop-shadow-2xl font-semibold hover:bg-[#9D4300]/80 hover:-translate-y-0.5 hover:scale-105 transition-all
                     duration-300'>
                        Upgrade Now
                    </button>
                    </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default SubscribeCards