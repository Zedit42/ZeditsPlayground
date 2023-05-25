import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import React from 'react';

const Button2 = () => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
      setCopied(true);
    };
  return (
    <div  className=' items-center justify-center flex'>
        <CopyToClipboard text={'copied'} onCopy={handleCopy}>
          <button className="inline-block my-2 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 p-[2px]  focus:outline-none  active:text-opacity-75">
            <span
            className="block bg-[#0f0f0f] text-white px-8 py-3 text-sm font-thin"
            >
            {copied ? 'Copied' : 'Copy'}
            </span>
          </button>
        </CopyToClipboard>
    </div>
  )
}

export default Button2