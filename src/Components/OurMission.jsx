import React from 'react'

function OurMission() {
  return (
    <section className='pb-20'>
        <div className='container bg-[#E6E3D3]'>
            <div className='px-6 py-20 flex flex-wrap md:flex-nowrap justify-center items-center gap-6'>
                <div className='bg-white px-12 py-13.5 rounded-3xl'>
                    <img src='./src/assets/MissionIcon.svg'/>
                    <h2 className='text-[#121C2A] font-playFair font-bold text-[40px]'>Our Mission</h2>
                    <p className='font-plusJakarta text-[#584237]'>To empower home cooks with professional-grade recipes, demystifying complex techniques,
                    <br/>and fostering aglobal community united by a passion for extraordinary food. We curate, test,
                    <br/>and perfect every dish so you can cook with confidence.</p>
                </div>
                <div className='text-[#582200] bg-[#F97316] rounded-3xl p-12'>
                    <img src='./src/assets/EyeIcon.svg'/>
                    <h2 className='font-playFair font-semibold text-[28px]'>Our Vision</h2>
                    <p className='font-plusJakarta'>A world where every kitchen is a canvas
                    <br/>for creativity, and every meal is an
                    <br/>opportunity to create lasting memories
                    <br/>with loved ones.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurMission