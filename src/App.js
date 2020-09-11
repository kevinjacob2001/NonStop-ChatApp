  
import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';

import Message from './Components/Message';


function App() {
  const [input,setInput]=useState("")
  const [messages,setMessages]=useState([
    {username:"Kevin",text:"Hai there"},
    {username:"Sonny",text:"Good morning!"}
  ])
  const [username,setUsername]=useState("")

  useEffect(()=>{ 
   setUsername(prompt("Please enter your name")); //run some code here.
  },[])                  //useEffect is to run based on condition

  const sendMessage=(e)=>{
    e.preventDefault();
    setMessages([...messages,{username:username,text:input}]);
    setInput("")
  }

 
  return (
    <div className="App">
      <h1>Non Stop!🚀</h1>
     <h2>Welcome {username}</h2>
      <form onSubmit={sendMessage}>
       <FormControl>
        <InputLabel >Enter a message...</InputLabel>
        <Input value={input} onChange={(event)=>setInput(event.target.value)} />
        <Button variant="contained" color="primary" disabled={!input} onClick={sendMessage}> Send message</Button>
      </FormControl>

         {
         messages.map((message)=>(
              <Message username={username} message={message}/>
         )
          )
          }
      </form>
    
    </div>
  );
}

export default App;
