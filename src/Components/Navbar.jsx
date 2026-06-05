import React from 'react';
import { Link } from 'react-router';


function Navbar() {
  return (
    <section className='py-5.5'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div className='lg:hidden'>
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                      <i className="fa-solid fa-bars fa-xl text-[#9D4300]"></i>
                    </div>
                    <ul
                      tabIndex="-1"
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                      <li><Link to="#">Home</Link></li>
                      <li><Link to="/">About Us</Link></li>
                      <li><Link to="/Subscribe">Subscription</Link></li>
                      <li><Link to="/Pizza">Pizza</Link></li>
                      <li><Link to="#">Pasta</Link></li>
                      <li><Link to="#">Fish</Link></li>
                      <li className='sm:hidden'><Link to="/#">Sign In</Link></li>
                      <li><i className="fa-solid fa-magnifying-glass"></i></li>
                    </ul>
                  </div>
                </div>
                <h2 className='text-[#9D4300] font-playFair font-semibold text-[28px]'>CulinaryArtisan</h2>
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-6.5'>
                        <li className='text-[#9D4300] font-bold font-plusJakarta underline underline-offset-4'>
                            <Link to='/'>About Us</Link>
                        </li>
                        <li className='text-[#121C2A] font-plusJakarta hover:text-[#9D4300] hover:underline underline-offset-4 hover:font-bold transition-all hover:underline-offset-1 duration-500 delay-100'>
                            <Link to='/Subscribe'>Subscription</Link>
                        </li>
                        <li><Link to="/Pizza">Pizza</Link></li>
                      <li><Link to="#">Pasta</Link></li>
                      <li><Link to="#">Fish</Link></li>
                    </ul>
                </div>
                <div className='flex items-center gap-3.5'>
                    <form className='items-center gap-2 border border-[#E0C0B1] px-3 py-1.5 rounded-lg hidden md:flex'>
                       <img src="./src/assets/Search.svg" alt='Search icon'/>
                        <input className='outline-0 text-[#8C7164] font-plusJakarta font-semibold' placeholder='Search recipes...'/>
                    </form>
                    <button className='md:hidden  hidden sm:block'>
                    <i className="fa-solid fa-magnifying-glass text-[#9D4300]"></i>
                    </button>
                    <button type='submit' className='bg-[#9D4300] text-white rounded-lg px-4 py-2 text-sm font-plusJakarta font-semibold hover:bg-[#9D4300]/80 cursor-pointer transition-all duration-300 delay-100 hover:scale-95 hidden sm:block'>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar