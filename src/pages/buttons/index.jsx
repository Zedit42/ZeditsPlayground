import LongNavbar from 'components/Navbar/LongNavbar'
import React from 'react'
import CodeEx from 'components/CodeEx'
import buttons from 'data/buttons'

const Introduction = () => {
  return (
    <div>
        <div>
          <img
            src='/animations/bg.png'
            className=' h-full w-screen fixed -z-10'
            alt='bgimage'

          />
        </div>
        <div className=' z-20'>
          <LongNavbar/>          
        </div>
        <div className=' pt-[6rem]  h-full z-10 '>
            <div className=' text-center pt-[3%] text-[#f1f1f1] text-4xl font-thin select-none'>
              Here some tailwindcss basic buttons
             </div>
             <div className=' w-full flex justify-center '>

             </div>
             {buttons.map((example, index) => (
                <div key={index} className="mx-4 mt-[2rem] min-w-[80%]">
                  <CodeEx codeS={example.codeS} title={example.title} iframe={example.iframe}/>
                </div>
              ))}
        </div>
    </div>
  )
}

export default Introduction