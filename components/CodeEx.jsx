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
    <div className=" rounded-lg p-4 border-2 border-dashed max-w-[80%]">
      <pre className=" mt-2 p-4" style={{ backgroundColor: "#0000 !important" }}>
        <code className="language-jsx z-10">{codeString}</code>
      </pre>
    </div>
  );
}

export default CodeExample