  
import { Button } from '@material-ui/core';
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
      <form onSubmit={sendMessage}>
      <input value={input} onChange={(event)=>setInput(event.target.value)}/>
      <Button variant="contained" color="primary" disabled={!input} onClick={sendMessage}> Send message</Button>
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
