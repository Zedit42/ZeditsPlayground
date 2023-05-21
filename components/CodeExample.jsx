import { useState } from 'react'
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min';

const Tab = ({ codeString, initialTab = 1 }) => {
  const [activeTab, setActiveTab] = useState(initialTab)

  const handleTab1Click = () => {
    setActiveTab(1)
  }

  const handleTab2Click = () => {
    setActiveTab(2)
  }
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="border border-gray-300 rounded-md">
      <div className="flex">
        <button
          className={`px-4 py-2 ${
            activeTab === 1 ? 'bg-gray-200' : 'bg-gray-100'
          }`}
          onClick={handleTab1Click}
        >
        <div className='  min-w-[80%]'>
            <div className=" bg-white bg-opacity-5 border-t border-l backdrop-blur-2xl rounded-2xl bg-blend-multiply border-white/30 shadow-md p-4 border-2 ">
                <pre className=" mt-2 p-4 rounded-2xl " style={{ backgroundColor: "#ffff !important" }}>
                    <code  style={{ backgroundColor: "#0000 !important" }} className="language-jsx z-10" >{codeString}</code>
                </pre>
            </div>
        </div>
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 2 ? 'bg-gray-200' : 'bg-gray-100'
          }`}
          onClick={handleTab2Click}
        >
          {codeString}
        </button>
      </div>
      <div className="p-4">
        {activeTab === 1 ? <p>{codeString} content</p> : <p>{codeString} content</p>}
      </div>
    </div>
  )
}

export default Tab