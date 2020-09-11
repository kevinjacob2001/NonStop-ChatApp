  
import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import {db} from './firebase';
import FlipMove from 'react-flip-move';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core'

import Message from './Components/Message';


function App() {
  const [input,setInput]=useState("")
  const [messages,setMessages]=useState([])
  const [username,setUsername]=useState("")

  useEffect(()=>{
    db.collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot)=>{
      setMessages(snapshot.docs.map((doc)=>({id:doc.id,message:doc.data()})))
    })
  },[])

  useEffect(()=>{ 
   setUsername(prompt("Hey there! Welcome to 𝐍𝐨𝐧𝐒𝐭𝐨𝐩.𝐤𝐣, 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐲𝐨𝐮𝐫 𝐧𝐚𝐦𝐞!")); //run some code here.
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
      <h1>NonStop.kj🚀</h1>
      <h7>A full stack React Chat app tied in with Firestore as the backend, developed by 𝐊𝐞𝐯𝐢𝐧 𝐉𝐚𝐜𝐨𝐛</h7>
     <h3>Welcome {username}!😃</h3>

      <form className="app__form" onSubmit={sendMessage}>
    
      <FormControl className="app__formControl">
        
        <Input className="app__input" placeholder="Enter the message" value={input} onChange={(event)=>setInput(event.target.value)} />
        
        <IconButton className="app__iconButton" variant="contained" color="primary" disabled={!input} onClick={sendMessage}>
        <SendIcon/>
        </IconButton>
        
       
</FormControl>

</form>

<FlipMove>
         {
         messages.map(({message,id})=>(
              <Message username={username} message={message}/>
         )
          )
          }
</FlipMove>



    
    </div>
  );
}

export default App;
