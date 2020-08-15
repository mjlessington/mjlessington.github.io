import React from 'react'
import io from 'socket.io-client'
export const CTX = React.createContext();


/*msg {
    from: 'user'
    msg:'hi'
    topic: 'general'
}
state {
    General: [ 
        {msg}, {msg}, {msg}
    ]
    
}

*/
const initState = {
    General: [
        {from: 'user', msg:'hi'},
    ],
    Soprano: [
        {from: '', msg:''},
    ],
    Alto: [
        {from: '', msg:''},
    ],
    Tenor: [
        {from: '', msg:''},
    ],
    Musicians: [
        {from: '', msg:''},
    ]
}

function reducer(state, action) {
    const {from, msg, section}= action.payload;
    switch(action.type) {
     case 'RECEIVE_MESSAGE':
         return {
            ...state,
            [section]: [
                ...state[section],
                {from, msg}
            ]
            } 
    default: 
            return state  
    }
}


let socket;

function sendChatAction (value) {
    socket.emit('chat message', value);

}

export default function Store(props) {
    const [allChats, dispatch] = React.useReducer(reducer, initState)


    if (!socket) {
        socket = io(':3001');
        socket.on('chat message', function(msg){
            console.log({msg});
            dispatch({type: 'RECEIVE_MESSAGE', payload:msg});
          });
        
    }
    
    const user = 'user' + Math.random(100).toFixed(2)
    
   
        return (
            <CTX.Provider value={{allChats, sendChatAction, user}}>
               {props.children} 
            </CTX.Provider>
        )
    
}
