import React from 'react'
import chef1 from '../assets/Chef portrait.png';
import chef2 from '../assets/Chef portrait (2).png';
import chef3 from '../assets/Chef portrait (3).png';

function OurTeam() {
  return (
    <section className='py-20 px-6'>
        <div className='container'>
            <div className='flex flex-col items-center justify-center gap-12'>
                <div className='text-center justify-center flex flex-col gap-3'>
                    <h2 className='text-[#121C2A] font-playFair font-bold text-[40px]'>Meet the Culinary Minds</h2>
                    <p className='text-[#584237]'>The passionate experts behind our curated collections, bringing decades of professional
                    <br/>kitchen experience to your screen.</p>
                </div>
                <div className='flex flex-wrap md:flex-nowrap items-center gap-12 w-full'>
                    <div className='flex flex-col items-center justify-center w-full hover:-translate-y-7 transition-all duration-700 delay-100'>
                        <img src={chef1} alt='Chef' className='rounded-full'/>
                        <h2 className='text-[#121C2A] text-[28px] font-semibold font-playFair'>Elena Rossi</h2>
                        <h3 className='text-[#9D4300] font-plusJakarta font-semibold text-sm'>Executive Chef</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full hover:-translate-y-7 transition-all duration-700 delay-100'>
                        <img src={chef2} alt='Chef' className='rounded-full'/>
                        <h2 className='text-[#121C2A] text-[28px] font-semibold font-playFair'>Marcus Chen</h2>
                        <h3 className='text-[#9D4300] font-plusJakarta font-semibold text-sm'>Pastry Specialist</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full hover:-translate-y-7 transition-all duration-700 delay-100'>
                        <img src={chef3} alt='Chef' className='rounded-full'/>
                        <h2 className='text-[#121C2A] text-[28px] font-semibold font-playFair'>Sarah Jenkins</h2>
                        <h3 className='text-[#9D4300] font-plusJakarta font-semibold text-sm'>Recipe Developer</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurTeam