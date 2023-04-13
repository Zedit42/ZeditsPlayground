import React from 'react'


const Test1 = () => {
  return (
    <div className='
     snap-center
     h-[100vh]'>

      <div className='  w-screen h-screen '>
        <div className=' w-full h-full items-center flex justify-center overflow-x-hidden bg-red-500 flex-col'>
            <h1 className="mb-2 font-mono text-4xl text-white md:text-6xl  ">
            hi, I&apos;m <br className="block md:hidden" />
            <span className="relative">
                <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-white text-brand-accent">
                vanntile <span className="text-3xl md:text-5xl">👋</span>
                </span>
                <span
                className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-red-500 w-full animate-type will-change`}"
                ></span>
            </span>
            </h1>
        </div>
      </div>
    </div>
  )
}

export default Test1