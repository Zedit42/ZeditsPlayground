import React, { useState } from 'react';
import Spline from '@splinetool/react-spline'
import Link from 'next/link'

const LongNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div >
      <div className=' text-[#f1f1f1] bg-[#0f0f0f]/30 border-t border-l border-white/20 w-full fixed h-[10%] space-x-[2rem] shadow-xl -top-1 shadow-black/30 flex flex-row select-none  bg-[hsl(0, 0%, 18.82%)]  '>
        <div className=' fixed top-0 left-0 h-[10%]  w-full -z-10 max-md:hidden '>
          <Spline scene='https://prod.spline.design/Ktd0ErFXwlSZ1Zn1/scene.splinecode'/>
        </div>
        <div className=' text-center my-auto  text-4xl font-thin border-b backdrop-blur-md  '>
          ZeditKit
        </div>
        <div className=' my-auto backdrop-blur-md text-2xl relative before:absolute before:bottom-7 before:h-[0.01rem] before:w-full before:scale-x-0 before:bg-[#f1f1f1] before:transition hover:before:scale-x-90 font-thin'>
          <button onClick={toggleDropdown}>
            Basic Elements
          </button>
          {isOpen && (
        <div className=" absolute w-[10rem] text-lg top-6 left-0 mt-2 bg-[#0f0f0f]/60 text-white  divide-y-[0.01rem] divide-gray-100 rounded-md shadow-lg">
          <Link href="/buttons" className="block px-4 py-2 hover:bg-[#0f0f0f]/40 ">Buttons</Link>
          <Link href="#" className="block px-4 py-2 hover:bg-[#0f0f0f]/40 ">Navbars</Link>
          <Link href="#" className="block px-4 py-2 hover:bg-[#0f0f0f]/40 ">Cards</Link>
        </div>
      )}
        </div>
      </div>
    </div>

  )
}

export default LongNavbar