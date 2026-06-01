import React from 'react'

function Features() {
  return (
    <section>
        <div className='container'>
            <div className='bg-[#EFF3FF] px-6 py-20 flex flex-col gap-12 rounded-2xl'>
                <div className='text-center'>
                    <h2 className='text-[#121C2A] text-[40px] font-playFair font-bold leading-12'>Compare Features</h2>
                    <p className='text-[#584237] font-plusJakarta text-lg'>See exactly what you get with each tier.</p>
                </div>
                <table>
                    <thead>
                        <tr className='w-full border-b border-[#D9E3F7]/50'>
                            <td className='w-[50%] p-4 text-[#584237] font-plusJakarta font-semibold text-sm'>FEATURE</td>
                            <td className='hidden p-4 text-center text-[#584237] font-plusJakarta font-semibold text-sm'>BASIC ARTISAN</td>
                            <td className='p-4 text-center text-[#9D4300] font-plusJakarta font-semibold text-sm border-b border-[#9D4300]'>MASTER CHEF</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='w-full border-b border-[#D9E3F7]/50'>
                            <td className='w-[50%] p-4 text-[#121C2A] font-plusJakarta'>Thousands of curated recipes</td>
                            <td className='hidden p-4 text-[#584237] font-semibold text-center'><i class="fa-solid fa-check fa-lg"></i></td>
                            <td className='p-4 text-[#9D4300] font-semibold flex items-center justify-center'><div className='w-3.75 h-3.75 bg-[#9D4300] rounded-full text-white flex items-center justify-center'>
                                <i class="fa-solid fa-check fa-2xs"></i>
                                </div> </td>
                        </tr>
                        <tr className='w-full border-b border-[#D9E3F7]/50'>
                            <td className='w-[50%] p-4 text-[#121C2A] font-plusJakarta'>Save favorites to cookbooks</td>
                            <td className='hidden p-4 text-[#584237] font-semibold text-center'><i class="fa-solid fa-check fa-lg"></i></td>
                            <td className='p-4 text-[#9D4300] font-semibold flex items-center justify-center'><div className='w-3.75 h-3.75 bg-[#9D4300] rounded-full text-white flex items-center justify-center'>
                                <i class="fa-solid fa-check fa-2xs"></i>
                                </div> </td>
                        </tr>
                        <tr className='w-full border-b border-[#D9E3F7]/50'>
                            <td className='w-[50%] p-4 text-[#121C2A] font-plusJakarta'>Ad-free browsing experience</td>
                            <td className='hidden p-4 text-[#8C7164] font-semibold text-center'><i class="fa-solid fa-minus"></i></td>
                            <td className='p-4 text-[#9D4300] font-semibold flex items-center justify-center'><div className='w-3.75 h-3.75 bg-[#9D4300] rounded-full text-white flex items-center justify-center'>
                                <i class="fa-solid fa-check fa-2xs"></i>
                                </div> </td>
                        </tr>
                        <tr className='w-full border-b border-[#D9E3F7]/50'>
                            <td className='w-[50%] p-4 text-[#121C2A] font-plusJakarta'>Exclusive recipes from renowned chefs</td>
                            <td className='hidden p-4 text-[#8C7164] font-semibold text-center'><i class="fa-solid fa-minus"></i></td>
                            <td className='p-4 text-[#9D4300] font-semibold flex items-center justify-center'><div className='w-3.75 h-3.75 bg-[#9D4300] rounded-full text-white flex items-center justify-center'>
                                <i class="fa-solid fa-check fa-2xs"></i>
                                </div> </td>
                        </tr>
                        <tr className='w-full border-b border-[#D9E3F7]/50'>
                            <td className='w-[50%] p-4 text-[#121C2A] font-plusJakarta'>Offline access mode</td>
                            <td className='hidden p-4 text-[#8C7164] font-semibold text-center'><i class="fa-solid fa-minus"></i></td>
                            <td className='p-4 text-[#9D4300] font-semibold flex items-center justify-center'><div className='w-3.75 h-3.75 bg-[#9D4300] rounded-full text-white flex items-center justify-center'>
                                <i class="fa-solid fa-check fa-2xs"></i>
                                </div> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default Features