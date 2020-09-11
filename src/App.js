import React, { useState } from 'react';
import './App.css';

function App() {
  const [input,setInput]=useState("")
  const [messages,setMessages]=useState(["Wassup?","Yoo guys!!!"])
  console.log(messages);

  const sendMessage=(e)=>{
    e.preventDefault();
    setMessages([...messages,input]);
    setInput("")
  }

 
  return (
    <div className="App">
      <h1>Non Stop!🚀</h1>
      <form onSubmit={(e)=>sendMessage}>
      <input value={input} onChange={(event)=>setInput(event.target.value)}/>
      <button disabled={!input} onClick={sendMessage}> Send message</button>
          <div>{messages.map((message)=>{
            return(
            <h3>{message}</h3>
            )
      })}</div>
      </form>
    
    </div>
  );
}

export default App;
