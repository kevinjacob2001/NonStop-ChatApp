import React from 'react';
import {CardContent,Typography,Card} from '@material-ui/core'
import './Message.css';

function Message(props){
    return(

   <Card className="message">
     <CardContent>
        <Typography 
        color="white" 
        variant="h5"
        component="h2">
      {props.username}: {props.text}
        </Typography>
       
      </CardContent>
 </Card>

    )
}

export default Message;