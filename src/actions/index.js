import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';



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

export const getEntries = (date) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/days/getEntries`, {
        method: 'POST',
        body: JSON.stringify({date: date}),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            console.log(err);
            // dispatch(fetchProtectedDataError(err));
        });
};

// export const SHOW_STATE = 'SHOW_STATE';
// export const showState = () => ({    
//     type: SHOW_STATE,
//     });