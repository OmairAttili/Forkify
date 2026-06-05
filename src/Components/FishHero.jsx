import React from 'react'

function FishHero() {
  return (
    <section className='pb-20'>
        <div className='container bg-[url("./assets/FishHero.png")] w-full h-150 flex items-center'>
            <div className='flex flex-col gap-3 pl-6'>
                <div className='rounded-full bg-[#9D4300]/90 w-fit text-white px-4 py-1 font-plusJakarta text-xs font-bold'>
                    <h2>NEW COLLECTION</h2>
                </div>
                <h2 className='text-white font-bold text-[56px] font-playFair'>The Catch of the Day</h2>
                <p className='text-[#D9E3F7] text-lg font-plusJakarta'>Explore our collection of fresh, sustainably sourced seafood recipes, from pan-<br/>
seared sea bass to classic fish tacos.</p>
                <div className='pt-3 flex items-center gap-4'>
                    <button type='button' className='bg-[#9D4300] font-semibold text-sm px-8 py-4 rounded-full cursor-pointer text-white flex items-center gap-2 hover:bg-[#9D4300]/70 hover:scale-105 transition-all duration-300 hover:translate-y-2'>
                        <span>Browse All Recipes</span>
                    </button>
                    <button type='button' className='bg-white/10 font-semibold text-sm px-8 py-4 rounded-full cursor-pointer text-white flex items-center gap-2 hover:bg-white/50 hover:scale-105 transition-all duration-300 hover:translate-y-2 backdrop-blur-3xl border border-white/20'>
                        <span>Browse All Recipes</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FishHero