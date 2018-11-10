
export const LIST_UPDATE = 'LIST_UPDATE';
export const listUpdate = (boxTitle, entries) => ({    
    type: LIST_UPDATE,
    boxTitle,
    entries
    });

export const SET_EDITING = 'SET_EDITING';
export const setEditing = (entryList, entryIndex) => ({    
    type: SET_EDITING,
    entryList,
    entryIndex
    });

export const UPDATE_ENTRY = 'UPDATE_ENTRY';
export const updateEntry = (entryList, entryIndex) => ({
	type: UPDATE_ENTRY,
	entryList,
	entryIndex
	});

// export const SHOW_STATE = 'SHOW_STATE';
// export const showState = () => ({    
//     type: SHOW_STATE,
//     });