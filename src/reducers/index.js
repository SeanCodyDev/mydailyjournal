//import actions
import {HELLO_WORLD, LIST_UPDATE, SET_EDITING} from '../actions';

//set initial state with dummy data
// const initialState = {
//     dayEntries: {
//         date: "today",
//         lists: {
//             grateful: 
//                 [
//                     {text: "meghan", editing: false},
//                     {text: "owen", editing: false},
//                     {text: "calvin", editing: false}
//                 ]    
//             ,
//             greatness: 
//                 [
//                     {text: "coach", editing: false},
//                     {text: "cody ", editing: false},
//                     {text: "play", editing: false}
//                 ]    
//             ,
//             affirmation: 
//                 [
//                     {text: "awesome", editing: false}
//                 ]    
            
//         }
//     }
// };

const initialState = {
    dayEntries: {
        date: "today",
        grateful: 
            [
                {text: "meghan", editing: false},
                {text: "owen", editing: false},
                {text: "calvin", editing: false}
            ],
        greatness: 
            [
                {text: "coach", editing: false},
                {text: "cody ", editing: false},
                {text: "play", editing: false}
            ],
        affirmation: 
            [
                {text: "awesome", editing: false}
            ]    
    }
};

//reducer handles actions from /actions/index.js
export const journalReducer = (state = initialState, action) => {
	console.log('state:', state);
    switch (action.type) {
        case HELLO_WORLD:
        	console.log(action.message);
            return {
                ...state,
                message: action.message
            };



        case LIST_UPDATE:
        	console.log(action);
            console.log("state:", state);
        	let newObj = {};
            newObj[action.boxTitle.type] = Object.values(action.entries);
            // console.log("newObj:", newObj);
            let newLists = Object.assign({}, state.lists, newObj);
            // console.log("newLists:", newLists)
            let newState = Object.assign({}, state, {lists: newLists});
            console.log("newState:", newState);
        	return Object.assign({}, state, {lists: newLists});



        case SET_EDITING:
            console.log('setEditing action', action)

            //map through state entries, searching for the one that meets the criteria of the action package
            let targetList = Object.keys(state.dayEntries).filter((key, index) => {
                if (key == action.entryList) {
                    return key;
                }
            });

            // console.log("targetList", targetList);
            // console.log('action.entryIndex', action);

            let targetEntry = state.dayEntries[targetList][action.entryIndex.index];
            // console.log('targetEntry', targetEntry);

            let updatedList = {};
            updatedList[targetList] = state.dayEntries[targetList].map((entry, index) => {
                if (index == action.entryIndex.index) {
                    return {...entry, editing: true};
                } else {
                    return entry;
                }
            });

            // console.log(updatedList);
            console.log({...state, dayEntries: {...state.dayEntries, [targetList]: updatedList[targetList]}});


            return {...state, dayEntries: {...state.dayEntries, [targetList]: updatedList[targetList]}};


        default:
            return state
    }
};