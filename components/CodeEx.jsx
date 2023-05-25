import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import React from 'react';



const Example = ({codeS, title, iframe}) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
  };
  const exampleContent = (
    <div className="flex flex-col items-center h-full justify-center ">
       {React.createElement('div', { dangerouslySetInnerHTML: { __html: iframe || codeS } })}
    </div>
  );

  const codeContent = (
    <pre className="whitespace-pre-wrap pt-[3rem] flex text-[#f1f1f1]  overflow-auto">
      {codeS}
    </pre>
  );

  return (
    <div className="flex flex-col items-center h-[30rem] z-10">
      <div className=' w-[80%] max-md:w-[100%] bg-black/60 flex justify-end rounded-t-md '>
      <h2 className="text-lg font-thin justify-start w-full my-auto mx-[5%] text-[#f1f1f1]">{title}</h2>
        <div>
        <CopyToClipboard text={codeS} onCopy={handleCopy}>
          <button className="inline-block my-2 rounded-l-lg hover:bg-gradient-to-r from-purple-500 via-blue-500 to-black p-[2px]  focus:outline-none  active:text-opacity-75">
            <span
            class="block rounded-l-lg bg-[#0f0f0f] text-white px-8 py-3 text-sm font-thin"
            >
            {copied ? 'Copied' : 'Copy'}
            </span>
          </button>
        </CopyToClipboard>
        </div>
        
        <button className="inline-block my-2 rounded-r-lg hover:bg-gradient-to-r from-black via-blue-500 to-purple-500 p-[2px]  focus:outline-none  active:text-opacity-75" onClick={() => setShowCode(!showCode)}>
          <span
          class="block rounded-r-lg bg-[#0f0f0f] text-white px-8 py-3 text-sm font-thin"
          >
           Code
          </span>
        </button>
      </div>
      <div className='p-4 bg-[#0f0f0f]/50 flex-col  rounded-md w-[80%] max-md:w-[100%] h-[90%]  flex'>
        {!showCode && exampleContent}
        {showCode && codeContent}
      </div>
    </div>
  );
};

export default Example;
