import React, { useState, useEffect, useRef } from 'react';


function App() {

  const [name, setName] = useState('');
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}
      <div>my name is {name}</div>
      <div>i rendered {}</div>
    </>
  );
}

export default App;
