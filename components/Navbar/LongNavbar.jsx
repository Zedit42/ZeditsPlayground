import React from 'react'
import Spline from '@splinetool/react-spline'
import Link from 'next/link'

const LongNavbar = () => {
  return (
    <div className=' h-screen fixed w-[15%] shadow-xl shadow-black/30 select-none'>
      <img
        src='/animations/navbar.svg'
        className=' absolute object-cover h-screen -z-10 opacity-30'
      />
      <div className=' fixed top-0 left-0 h-screen  w-[14%] -z-10 '>
        <Spline scene='https://prod.spline.design/Ktd0ErFXwlSZ1Zn1/scene.splinecode'/>
      </div>
      <div className=' text-center py-[3%] text-4xl font-thin border-b border-black '>
         Animations
      </div>
      <div className=' space-y-[1rem] ml-[6%] w-max  mt-[5%] text-2xl relative before:absolute before:-bottom-1 before:h-[0.01rem] before:w-full before:scale-x-0 before:bg-black before:transition hover:before:scale-x-90 font-thin'>
        <Link className='' href='#'>
          Basic Animations
        </Link>
      </div>
    </div>
  )
}

export default LongNavbar