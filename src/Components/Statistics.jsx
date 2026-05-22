import React from 'react'

function Statistics() {
  return (
    <section>
        <div className='container'>
            <div className='flex items-center gap-6'>
                <div className='bg-[#E6EEFF] p-6 rounded-xl flex flex-col gap-2 items-center justify-center w-full'>
                    <span className='text-[#9D4300] font-playFair'>50k+</span>
                    <h2 className='text-[#584237] font-semibold font-plusJakarta text-sm'>CURATED RECIPES</h2>
                </div>
                <div className='bg-[#E6EEFF] p-6 rounded-xl flex flex-col gap-2 items-center justify-center w-full'>
                    <span className='text-[#9D4300] font-playFair'>1M+</span>
                    <h2 className='text-[#584237] font-semibold font-plusJakarta text-sm'>ACTIVE USERS</h2>
                </div>
                <div className='bg-[#E6EEFF] p-6 rounded-xl flex flex-col gap-2 items-center justify-center w-full'>
                    <span className='text-[#9D4300] font-playFair'>120+</span>
                    <h2 className='text-[#584237] font-semibold font-plusJakarta text-sm'>EXPERT CHEFS</h2>
                </div>
                <div className='bg-[#E6EEFF] p-6 rounded-xl flex flex-col gap-2 items-center justify-center w-full'>
                    <span className='text-[#9D4300] font-playFair'>15</span>
                    <h2 className='text-[#584237] font-semibold font-plusJakarta text-sm'>YEARS EXPERIENCE</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Statistics