import React from 'react'

function PastaHero() {
  return (
    <section className='pb-20'>
        <div className='container bg-[url("./assets/PastaBackground.png")] w-full h-150 flex items-center'>
            <div className='flex flex-col gap-3 pl-6'>
                <div className='rounded-full bg-[#F97316] w-fit text-[#582200] px-4 py-1 font-plusJakarta'>
                    <h2>PREMIUM RECIPES</h2>
                </div>
                <h2 className='text-white font-bold text-[56px] font-playFair'>The Art of Pasta</h2>
                <p className='text-[#E6E3D3] font-plusJakarta'>Discover the secrets to authentic Italian pasta, from rich slow-cooked ragus to<br/>fresh seasonal sauces.</p>
                <div className='pt-3'>
                    <button type='button' className='bg-[#9D4300] px-8 py-4 rounded-xl cursor-pointer text-white flex items-center gap-2 hover:bg-[#9D4300]/70 hover:scale-105 transition-all duration-300 hover:translate-y-2'>
                        <span>Explore Collections</span>
                        <i class="fa-solid fa-arrow-down fa-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PastaHero