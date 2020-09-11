import React, { useState } from 'react';
import './App.css';

function App() {

  const sendMessage=()=>{
    
  }

  const [input,setInput]=useState("")
     console.log(input);
  return (
    <div className="App">
      <h1>Non Stop!🚀</h1>
      <input value={input} onChange={(event)=>setInput(event.target.value)}/>
      <button>Send message</button>
    </div>
  );
}

export default App;
