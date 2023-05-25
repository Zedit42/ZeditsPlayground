import React, { useState } from 'react';
import Link from 'next/link';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' left-[30%] absolute'>
        <div className=' my-auto text-2xl font-thin text-white'>
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