  
import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import {FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';

import Message from './Components/Message';


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

      <FormControl>
        <InputLabel >Enter a message...</InputLabel>
        <Input value={input} onChange={(event)=>setInput(event.target.value)} />
        <Button variant="contained" color="primary" disabled={!input} onClick={sendMessage}> Send message</Button>
      </FormControl>

         {
         messages.map((message)=>(
              <Message message={message}/>
         )
          )
          }
     

      </form>
    
    </div>
  );
}

export default App;
