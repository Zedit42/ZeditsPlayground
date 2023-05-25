import React from 'react'

const test1 = () => {
  return (
    <div className=' justify-center flex items-center'>
        <button className="inline-block my-2 rounded-l-lg hover:bg-gradient-to-r from-purple-500 via-blue-500 to-black p-[2px]  focus:outline-none  active:text-opacity-75">
          <span class="block rounded-l-lg bg-[#0f0f0f] text-white px-8 py-3 text-sm font-thin">1</span>
        </button>
        <button className="inline-block my-2 hover:bg-gradient-to-r from-black via-blue-500 to-black p-[2px]  focus:outline-none  active:text-opacity-75">
          <span class="block  bg-[#0f0f0f] text-white px-8 py-3 text-sm font-thin">2</span>
        </button>
        <button className="inline-block my-2 rounded-r-lg hover:bg-gradient-to-r from-black via-blue-500 to-purple-500 p-[2px]  focus:outline-none  active:text-opacity-75">
          <span class="block rounded-r-lg bg-[#0f0f0f] text-white px-8 py-3 text-sm font-thin">3</span>
        </button>
    </div>
  )
}

export default test1