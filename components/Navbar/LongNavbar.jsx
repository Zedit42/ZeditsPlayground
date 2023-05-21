import React from 'react'
import Spline from '@splinetool/react-spline'
import Link from 'next/link'

const LongNavbar = () => {
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
          <Link className='' href='#'>
            Basic Animations
          </Link>
        </div>
      </div>
    </div>

  )
}

export default LongNavbar