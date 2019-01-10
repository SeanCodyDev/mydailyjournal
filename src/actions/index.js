import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


//is this being called anywhere?
//this may be redundant with UPDATE_ENTRY
//because of how forms are being used here, it is preferable to
//update an entire list at a time, not just a single entry
//the state may need to be updated with an 'editing' property for each list
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

export const LOAD_ENTRIES = 'LOAD_ENTRIES';
export const loadEntries = (data) => ({
    type: LOAD_ENTRIES,
    data
    });

export const getEntries = (date) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/days/getEntries`, {
        mode: 'cors',
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
        .then(body => {
            console.log(body)
            return dispatch(loadEntries(body))})
        .catch(err => {
            console.log(err);
            // dispatch(fetchProtectedDataError(err));
        });
};

// export const SHOW_STATE = 'SHOW_STATE';
// export const showState = () => ({    
//     type: SHOW_STATE,
//     });