import LongNavbar from 'components/Navbar/LongNavbar'
import React from 'react'
import CodeEx from 'components/CodeEx'

const Introduction = () => {
  return (
    <div>
        <LongNavbar/>
        <img
        src='/animations/main.svg'
        className=' lg:ml-[15%] fixed object-cover bottom-0 opacity-30 -z-10'
        />
        <div className=' lg:ml-[15%] h-screen'>
             <div className=' text-center pt-[3%] text-4xl font-thin select-none'>
              Here some tailwind basic animations
             </div>
             <div className=" flex justify-center  mt-[5%] ">
              <CodeEx />
            </div>
            <div className=" flex justify-center  mt-[5%] ">
              <CodeEx />
            </div>
        </div>
    </div>
  )
}

export default Introduction