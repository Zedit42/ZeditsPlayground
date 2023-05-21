import LongNavbar from 'components/Navbar/LongNavbar'
import React from 'react'
import CodeEx from 'components/CodeEx'

const Introduction = () => {
  const codeExamples = [
    {
      title: 'Sayacı Arttır',
      codeS: `
      <a
      class="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
      href="/download"
    >
      <span
        class="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
      >
        Download
      </span>
    </a>
    `
    },
    {
      title: 'Anahtarı Aç/Kapa',
      codeS: ` 
  
      <div>
        <p>Aktif: {isOn ? 'Evet' : 'Hayır'}</p>
        <button onClick={handleClick}>{isOn ? 'Kapat' : 'Aç'}</button>
      </div>

  `
    },
    {
      title: 'Metin Girişi',
      codeS: `
      <div>
        <p>Girilen metin: {text}</p>
        <input type="text" value={text} onChange={handleChange} />
      </div>

  `
    }
  ];
  
  return (
    <div>
        <div>
          <img
            src='/animations/bg.png'
            className=' h-full w-screen fixed -z-10'
          />
        </div>
        <div className=' z-20'>
          <LongNavbar/>          
        </div>

        <div className=' pt-[6rem]  h-full z-10 '>
            <div className=' text-center pt-[3%] text-[#f1f1f1] text-4xl font-thin select-none'>
              Here some tailwind basic animations
             </div>
             {codeExamples.map((example, index) => (
                <div key={index} className="mx-4 mt-[2rem] min-w-[80%]">
                  <CodeEx codeS={example.codeS} title={example.title} />
                </div>
              ))}
        </div>
    </div>
  )
}

export default Introduction