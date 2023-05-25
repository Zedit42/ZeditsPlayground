const buttons = [
    {
      title: 'Line Button',
      iframe:`<iframe src="/buttons/button1" frameborder="0"></iframe>`,
      codeS: `
      <button className=' my-auto text-white text-center text-2xl relative before:absolute before:bottom-7 before:h-[0.01rem] before:w-16 before:scale-x-0 before:bg-[#f1f1f1] before:transition hover:before:scale-x-90 font-thin'>
        Button
      </button>
    `
    },
    {
      title: 'Button Group',
      iframe: `<iframe src="/buttons/button0" frameborder="0"></iframe>`,
      codeS: `
      <button className="inline-block my-2 rounded-l-lg hover:bg-gradient-to-r from-purple-500 via-blue-500 to-black p-[2px]  focus:outline-none  active:text-opacity-75">
        <span class="block rounded-l-lg bg-[#0f0f0f] text-white px-8 py-3 text-sm font-thin">1</span>
      </button>
      <button className="inline-block my-2 hover:bg-gradient-to-r from-black via-blue-500 to-black p-[2px]  focus:outline-none  active:text-opacity-75">
        <span class="block  bg-[#0f0f0f] text-white px-8 py-3 text-sm font-thin">2</span>
      </button>
      <button className="inline-block my-2 rounded-r-lg hover:bg-gradient-to-r from-black via-blue-500 to-purple-500 p-[2px]  focus:outline-none  active:text-opacity-75">
        <span class="block rounded-r-lg bg-[#0f0f0f] text-white px-8 py-3 text-sm font-thin">3</span>
      </button>
  `
    },
    {
      title: 'Dropdown',
      iframe: `<iframe src="/buttons/button3" frameborder="0"></iframe>`,
      codeS: `
      import React, { useState } from 'react';
      import Link from 'next/link';
      
      const Dropdown = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };
      
        return (
          <div>
              <div className=' my-auto text-2xl font-thin'>
                <button onClick={toggleDropdown}>
                  Dropdown
                </button>
                {isOpen && (
              <div className=" absolute w-[10rem] text-lg top-6 left-0 mt-2 bg-[#0f0f0f]/60 text-white divide-y-[0.01rem] divide-gray-100 rounded-md shadow-lg">
                <Link href="#" className="block px-4 py-2 hover:bg-[#0f0f0f]/40 ">1</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-[#0f0f0f]/40 ">2</Link>
      
              </div>
            )}
              </div>
          </div>
        );
      };
      export default Dropdown
  `
    },
    {
      title: 'Slider',
      iframe: `<iframe src="/buttons/button4" frameborder="0"></iframe>`,
      codeS: `
      import React, { useState, useRef } from 'react';

      const SliderInput = () => {
        const [value, setValue] = useState(50);
        const [isDragging, setIsDragging] = useState(false);
        const sliderRef = useRef(null);
      
        const handleMouseDown = () => {
          setIsDragging(true);
        };
      
        const handleMouseUp = () => {
          setIsDragging(false);
        };
      
        const handleMouseMove = (e) => {
          if (!isDragging) return;
      
          const sliderWidth = sliderRef.current.clientWidth;
          const offsetX = e.pageX - sliderRef.current.offsetLeft;
          const newValue = Math.round((offsetX / sliderWidth) * 100);
          setValue(newValue);
        };
      
        return (
          <div className=' flex  justify-center items-center'>
          <div
            className="w-64 h-4 bg-[#0f0f0f]/60 rounded-sm cursor-pointer"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            ref={sliderRef}
          >
            <div
              className="h-4 bg-gradient-to-r from-black via-blue-500 to-purple-500 rounded-sm "
              style={{ width: &#39;&#36;{value}%&#39; }}
            ></div>
          </div>
          <div className=' m-2 text-lg text-white font-thin select-none'>%{value}</div>
          </div>
      
        );
      };
      
      
      export default SliderInput;
  `
    },
    {
      title: 'Copy Button',
      iframe: `<iframe src="/buttons/button2" frameborder="0"></iframe>`,
      codeS: `
      import { useState } from 'react';
      import CopyToClipboard from 'react-copy-to-clipboard';
      import React from 'react';
      
      const button2 = () => {
          const [copied, setCopied] = useState(false);
          const handleCopy = () => {
            setCopied(true);
          };
        return (
          <div  className=' items-center justify-center flex'>
              <CopyToClipboard text={'copied'} onCopy={handleCopy}>
                <button className="inline-block my-2 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 p-[2px]  focus:outline-none  active:text-opacity-75">
                  <span
                  class="block bg-[#0f0f0f] text-white px-8 py-3 text-sm font-thin"
                  >
                  {copied ? 'Copied' : 'Copy'}
                  </span>
                </button>
              </CopyToClipboard>
          </div>
        )
      }
      
      export default button2

  `
    }
  ];
  export default buttons;