import React from 'react'

function Footer() {
  return (
    <section className='pt-12.5'>
        <div className='container bg-[#F2F1E6] pb-16'>
            <div className='flex flex-wrap lg:flex-nowrap items-start gap-8 py-16'>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-playFair text-[28px] font-semibold text-[#9D4300]'>CulinaryArtisan</h2>
                    <p className='text-[#121C2A]/70 font-plusJakarta'>Elevating everyday cooking into art.<br/>
                       Discover, share, and enjoy premium<br/>
                       recipes curated for the modern<br/>
                       palate.</p>
                </div>
                <div className='flex flex-col gap-6 lg:w-full'>
                    <h2 className='font-plusJakarta text-sm font-bold text-[#121C2A]'>COMPANY</h2>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <a href='#' className='text-[#121C2A] font-plusJakarta'>Newsletter</a>
                        </li>
                        <li>
                            <a href='#' className='text-[#121C2A] font-plusJakarta'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href='#' className='text-[#121C2A] font-plusJakarta'>Terms of Service</a>
                        </li>
                        <li>
                            <a href='#' className='text-[#121C2A] font-plusJakarta'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6 lg:w-full'>
                    <h2 className='font-plusJakarta text-sm font-bold text-[#121C2A]'>QUICK LINKS</h2>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <a href='#' className='text-[#121C2A] font-plusJakarta'>About Us</a>
                        </li>
                        <li>
                            <a href='#' className='text-[#121C2A] font-plusJakarta'>Subscription</a>
                        </li>
                        <li>
                            <a href='#' className='text-[#121C2A] font-plusJakarta'>Pizza</a>
                        </li>
                        <li>
                            <a href='#' className='text-[#121C2A] font-plusJakarta'>Desserts</a>
                        </li>
                        <li>
                            <a href='#' className='text-[#121C2A] font-plusJakarta'>Healthy Food</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6 lg:w-full'>
                    <h2 className='font-plusJakarta text-sm font-bold text-[#121C2A]'>SOCIAL</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center gap-3'>
                            <i className="fa-solid fa-earth-americas text-[#121C2A]/70"></i>
                            <a href='#' className='text-[#121C2A] font-plusJakarta'>Instagram</a>
                        </li>
                        <li className='flex items-center gap-3'>
                            <i className="fa-solid fa-user-group text-[#121C2A]/70"></i>
                            <a href='#' className='text-[#121C2A] font-plusJakarta'>Facebook</a>
                        </li>
                        <li className='flex items-center gap-3'>
                            <i className="fa-solid fa-share-nodes fa-lg text-[#121C2A]/70"></i>
                            <a href='#' className='text-[#121C2A] font-plusJakarta'>Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-[#121C2A]/40 font-plusJakarta font-bold text-xs text-center pt-7.75'>
                <p>© 2024 CULINARYARTISAN. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    </section>
  )
}

export default Footer