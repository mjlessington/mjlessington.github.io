import React, { Component } from 'react'

const CTX = React.createContext();


/*msg {
    from: 'user'
    msg:'hi'
    topic: 'general'
}
state {
    General: [
        {}
    ]
    Soprano: 
    Alto: 
    Tenor: 
    Musicians:
}

*/


function reducer(state, action) {
    switch(action.type) {
     case 'RECEIVE_MESSAGE':
         return {


         } 
         default: return state  
    }
}

export default function Store () {

    const reducerHook = React.useReducer(red, initState)
        return (
            <CTX.Provider value={}>
               {props.children} 
            </CTX.Provider>
        )
    
}
