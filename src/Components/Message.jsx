import React from 'react';


function Message(props){
    return(
        <h2>
           {props.username}: {props.message}
        </h2>
    )
}

export default Message;