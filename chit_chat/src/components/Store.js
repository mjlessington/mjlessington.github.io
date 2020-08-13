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

sendChatAction (dispatch, socket) => {
    socket.emit('chat message', $('#m').val());

}

let socket;

export default function Store(props) {
    
    if (!socket) {
        socket = io(':3001')
    }
    
    
    const [allChats, dispatch] = React.useReducer(reducer, initState)
        return (
            <CTX.Provider value={allChats}>
               {props.children} 
            </CTX.Provider>
        )
    
}
