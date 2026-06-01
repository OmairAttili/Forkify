import React from 'react'

function Hero2() {
  return (
    <section className='py-20'>
        <div className='container'>
            <div className='flex flex-wrap md:flex-nowrap items-center justify-center gap-12'>
                <div className='flex flex-col gap-6'>
                    <h2 className='font-playFair text-[56px] font-bold text-[#121C2A]'>Crafting Culinary<br/>
                    Experiences, Sharing<br/>
                    Joy.</h2>
                    <p className='text-[#584237] font-plusJakarta text-xl'>At CulinaryArtisan, we believe that food is more than sustenance—<br/>
                       it's a universal language of love, culture, and connection. Our journey
                       <br/>began with a simple desire to make gourmet cooking accessible
                      <br/>and inspiring for everyone.</p>
                </div>
                <div>
                    <img src='./src/assets/ChefsPreparingAGourmetMeal.png' alt='Chefs Preparing A Gourmet Meal' className='rounded-3xl'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero2