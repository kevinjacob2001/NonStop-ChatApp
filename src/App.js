  
import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import {db} from './firebase';
import FlipMove from 'react-flip-move';
import firebase from 'firebase';

import Message from './Components/Message';


function App() {
  const [input,setInput]=useState("")
  const [messages,setMessages]=useState([])
  const [username,setUsername]=useState("")

  useEffect(()=>{
    db.collection("messages").orderBy("timestamp","asc").onSnapshot((snapshot)=>{
      setMessages(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})))
    })
  },[])

  useEffect(()=>{ 
   setUsername(prompt("Please enter your name")); //run some code here.
  },[])                  //useEffect is to run based on condition


  const sendMessage=(e)=>{
    e.preventDefault();
      db.collection("messages").add({
        message:input,
        username:username,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })
    setInput("")
  }

 
  return (
    <div className="App">
      <h1>Non Stop!🚀</h1>
     <h2>Welcome {username}</h2>
      <form onSubmit={sendMessage}>
      

<FlipMove>
         {
         messages.map((message)=>(
              <Message  username={username} message={message}/>
         )
          )
          }
</FlipMove>

<FormControl>
        <InputLabel >Enter a message...</InputLabel>
        <Input value={input} onChange={(event)=>setInput(event.target.value)} />
        <Button variant="contained" color="primary" disabled={!input} onClick={sendMessage}> Send message</Button>
</FormControl>
      </form>
    
    </div>
  );
}

export default App;
