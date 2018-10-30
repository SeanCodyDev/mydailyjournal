//import actions
import {HELLO_WORLD, LIST_UPDATE} from '../actions';

//set initial state with dummy data
const initialState = {
	lists: {
		grateful: ["meghan", "owen", "calvin"],
		greatness: ["code", "coach", "play"],
		affirmation: ["awesome"]
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

        default:
            return state
    }
};