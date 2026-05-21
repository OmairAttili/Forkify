import React from 'react'

function Hero() {
  return (
    <section>
        <div className='container bg-[url("./assets/HeroImg.png")] flex items-center justify-center h-200'>
            <div className='flex flex-col gap-6 text-center'>
            <p className='text-[#121C2A] text-[57px] font-bold font-playFair'>Find Your Next<br/>
               <span className='text-[#9D4300]'>Culinary</span> Masterpiece</p>
               <p className='text-[#584237] font-plusJakarta text-lg'>Explore thousands of chef-curated recipes. From quick weeknight<br/>
                  dinners to weekend baking projects, elevate your home cooking<br/>
                  with a touch of elegance.</p>
                  <div className='py-6 flex justify-center'>
                    <form className='bg-white w-fit border border-[#E0C0B1] rounded-xl p-2 flex items-center'>
                        <i className="fa-solid fa-magnifying-glass text-[#9D4300]"></i>
                        <input placeholder='What are you craving today?' className='text-[#8C7164] sm:w-[423px] w-[150px] py-3.5 px-2 outline-0'/>
                        <button type='submit' className='bg-[#9D4300] text-white rounded-lg px-6 py-3 text-sm font-plusJakarta font-semibold hover:bg-[#9D4300]/80 cursor-pointer transition-all duration-300 delay-100 hover:scale-95'>
                        Search
                    </button>
                    </form>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Hero