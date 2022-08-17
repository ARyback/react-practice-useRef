import React, { useState, useEffect, useRef } from 'react';
import ".App.css";


function App() {

  const [name, setName] = useState('');
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name}</div>
      <button>Focus</button>
    </>
  )
}

export default App;
