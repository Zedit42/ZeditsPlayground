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
        className="h-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 rounded-sm "
        style={{ width: `${value}%` }}
      ></div>
    </div>
    <div className=' m-2 text-lg text-white font-thin select-none'>%{value}</div>
    </div>

  );
};


export default SliderInput;