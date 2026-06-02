import React from 'react'

function PizzaHero() {
  return (
    <section>
      <div className='container bg-[url("./assets/PizzaBackground.png")] w-full h-433.25 bg-no-repeat bg-center flex items-center justify-center'>
        <div className='relative px-6'>
          <div className='pb-4'>
          <div className='absolute w-54 px-4 py-1 bg-white/70 text-white font-bold text-xs font-plusJakarta rounded-full top-0 left-1/2 -translate-x-1/2 text-center'>
          <span>MASTERCLASS COLLECTION</span>
          </div>
          </div>
          <h2 className='text-[56px] font-bold font-playFair text-center text-white leading-14 py-4'>The Art of<br/><span className='text-[#FFB690]'>Perfect Pizza</span></h2>
        <p className='text-center text-[#EFF3FF] font-plusJakarta text-lg'>Discover the secrets to authentic Neapolitan dough, rich artisanal<br/>sauces, and gourmet toppings curated by our master chefs.</p>
        </div>
      </div>
    </section>
  )
}

export default PizzaHero