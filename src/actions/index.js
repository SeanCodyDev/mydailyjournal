

export const HELLO_WORLD = 'HELLO_WORLD';
export const helloWorld = (message) => ({    
    type: HELLO_WORLD,
    message
    });

export const LIST_UPDATE = 'LIST_UPDATE';
export const listUpdate = (boxTitle, entries) => ({    
    type: LIST_UPDATE,
    boxTitle,
    entries
    });

// export const SHOW_STATE = 'SHOW_STATE';
// export const showState = () => ({    
//     type: SHOW_STATE,
//     });