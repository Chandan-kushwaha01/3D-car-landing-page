import { ChevronLeft, Gauge, Menu, User, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll effect on Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  // Navlink Data
  const NavLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Fleet',
      path: '/fleet'
    },
    {
      name: 'About Us',
      path: '/about'
    }
  ]

  // Mobile Navlinks Classes
  const getNavLinkClass = ({ isActive }) => isActive ? 'text-white p-5 bg-zinc-950 transition' : 'hover:text-white text-zinc-800 border-b-zinc-200 p-5 hover:bg-zinc-900 transition'
  return (
    <header className={`fixed cursor-pointer top-3.5 left-1/2 -translate-x-1/2 z-90 transition-all duration-300 rounded-full h-14 ${isScrolled ? 'bg-zinc-900/50 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-3xl' : 'bg-zinc-200 w-[95%] max-w-4xl'}`}>
      <div className="mx-auto h-full px-6">
        <nav className="centered-row justify-between h-full">



          {/* Logo */}
          <NavLink to='/' className='flex items-center'>
            <div className="h-auto relative centered-row gap-2">

              {/* Icon */}
              <Gauge className={`h-8 w-8 ${isScrolled ? 'text-zinc-100' : 'text-zinc-700/60'}`} />

              {/* Text */}
              <p className={`tracking-tighter cursor-pointer text-xl clash-display font-medium ${isScrolled ? 'text-zinc-200' : 'text-zinc-700'}`}>
                DriveWell <sup className='text-xs ml-1'>TM</sup>
              </p>
            </div>
          </NavLink>



          {/* Desktop Navigation */}
          <div className='hidden md:centered-row gap-6'>
            {
              NavLinks.map((item, index) => (
                <a href={item.path} key={index} className={`text-sm md:text-lg hover:font-semibold hover:-translate-y-1 ease-out transition-all duration-300 ${isScrolled ? 'text-white hover:text-yellow-300' : 'text-zinc-800'}`}>
                  {item.name}
                </a>
              ))
            }
          </div>



          {/* Button */}
          <div className="md:centered-row gap-2 hidden">
            {/* Button */}
            <Link to={'/rent'}>
              <button className="text-base clash-display bg-gradient-to-r from-zinc-700 to-zinc-950 px-4 py-2 rounded-full cursor-pointer hover:-translate-y-0.5 duration-200 transition-all ease-out">
                Rent Today
              </button>
            </Link>

            {/* User Icon */}
            <div className="w-10 h-10 bg-zinc-800 rounded-full center-item cursor-pointer">
              <User />
            </div>
          </div>



          {/* Mobile Navigation Icon */}
          <div className="md:hidden p-1 rounded-md">
            <button className="md:hidden text-white hover:text-zinc-400 transition-colors" onClick={() => setIsOpen(!isOpen)}>
              {
                isOpen ? <X size={34} className='text-zinc-800' /> : <Menu size={40} className={` ${isScrolled ? 'text-zinc-200' : 'text-zinc-800'} mt-2`} />
              }

            </button>
          </div>


          {/* Mobile Nav Menu */}
          <div className={`md:hidden absolute -top-5 w-full h-screen bg-zinc-50 backdrop-blur-lg transition-transform duration-300 ease-in-out z-[999] flex flex-col justify-between ${isOpen ? '-translate-x-6' : 'translate-x-[1500px]'
            }`}>

            {/* Mobile Nav Header */}
            <div className="flex items-center h-20 border-b border-zinc-500/80">
              <button onClick={() => setIsOpen(false)} className="centered-row p-4 gap-2">
                <ChevronLeft className='text-zinc-800' />
                <p className='text-lg clash-display text-zinc-800'>Back</p>
              </button>
            </div>

            {/* Mobile nav links */}
            <div className="flex-1 col text-zinc-800 pb-4">
              {
                ['/', '/fleet', '/about', '/rent'].map((path, i) => (
                  <NavLink key={i} to={path} className={getNavLinkClass}>
                    <button onClick={() => setIsOpen(false)} className="text-xl w-full clash-display">
                      {
                        ['Home', 'Fleet', 'About Us', 'Rent Today'][i]
                      }
                    </button>
                  </NavLink>
                ))
              }
            </div>

            {/* Mobile nav footer */}
            <div className="text-center text-sm pt-8 pb-8 text-zinc-500">
              &copy;{new Date().getFullYear()}{" "}
              <span className='font-semibold'>Chandan Kushwaha</span> All rights reserved.
            </div>

          </div>


        </nav>
      </div>
    </header>
  )
}

export default NavBar
