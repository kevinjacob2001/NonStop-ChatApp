import React, { useState } from 'react';
import './App.css';

function App() {
  const [input,setInput]=useState("")
  const [messages,setMessages]=useState(["hai","hello"])
  console.log(messages);

  const sendMessage=()=>{
    setMessages([...messages,input]);
    setInput("")
  }

 
  return (
    <div className="App">
      <h1>Non Stop!🚀</h1>
      <input value={input} onChange={(event)=>setInput(event.target.value)}/>
      <button disabled={!input} onClick={sendMessage}> Send message</button>
          <div>{messages.map((message)=>{
            return(
            <li>{message}</li>
            )
      })}</div>
    </div>
  );
}

export default App;
