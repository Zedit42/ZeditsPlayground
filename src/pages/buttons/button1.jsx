import React from 'react'

const button1 = () => {
  return (
    <div className=' items-center justify-center flex'>       
        <button className=' my-auto text-white text-center text-2xl relative before:absolute before:bottom-7 before:h-[0.01rem] before:w-16 before:scale-x-0 before:bg-[#f1f1f1] before:transition hover:before:scale-x-90 font-thin'>
            Button
        </button>
    </div>
  )
}

export default button1