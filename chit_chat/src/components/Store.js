import React from 'react'

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

export default function Store(props) {

    const reducerHook = React.useReducer(reducer, initState)
        return (
            <CTX.Provider value={reducerHook}>
               {props.children} 
            </CTX.Provider>
        )
    
}
