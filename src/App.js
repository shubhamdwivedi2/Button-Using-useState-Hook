import React from 'react';
import { useState } from 'react/cjs/react.development';
import './index.css'

const App = () => {
  const [count,setCount] = useState(0);
  const incre = () => {
        setCount(count+1);
  };

  return(
    <>
    <h1>{count}</h1>
    <button onClick={incre}>Click Here</button>
    </>
  )
};

export default App; 