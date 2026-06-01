import React from 'react'

function SubscribeHero() {
  return (
    <section className='bg-'>
        <div className='container bg-[#f9f9ff] flex items-center justify-center relative overflow-hidden w-full pt-20 pb-32 px-64'>
            <div className='w-96 h-96 rounded-full bg-[#FFDBCA] absolute opacity-50 blur-3xl -top-32 -right-28'></div>
            <div className='w-96 h-96 rounded-full bg-[#CDE5FF] absolute opacity-50 blur-3xl -bottom-32 -left-28'></div>
            <div className='flex flex-col gap-4 w-full text-center'>
                <h2 className='text-[#121C2A] font-playFair font-bold text-[55px] w-full'>Elevate Your Culinary Journey</h2>
                <p className='text-center text-[#584237] font-plusJakarta text-lg'>Join our premium community to unlock exclusive recipes, ad-free browsing, and
                <br/>masterclasses from top chefs. Discover the art of cooking without limits.</p>
            </div>
            </div>
    </section>
  )
}

export default SubscribeHero