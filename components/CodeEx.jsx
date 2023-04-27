import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min';
import { useEffect } from 'react';

function CodeExample() {
  const codeString = `import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Sayaç: {count}</p>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
}`;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className=" bg-white bg-opacity-5 border-t border-l backdrop-blur-2xl rounded-2xl bg-blend-multiply border-white/30 shadow-md p-4 border-2  min-w-[80%]">
      <pre className=" mt-2 p-4 rounded-2xl " style={{ backgroundColor: "#ffff !important" }}>
        <code  style={{ backgroundColor: "#0000 !important" }} className="language-jsx z-10" >{codeString}</code>
      </pre>
    </div>
  );
}

export default CodeExample