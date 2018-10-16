//import actions
import {HELLO_WORLD} from '../actions';

//set initial state with dummy data
const initialState = {
	gratefulList: ["meghan", "owen", "calvin"],
	greatnessList: ["code", "coach", "play"],
	affirmation: ["awesome"]
};

//reducer handles actions from /actions/index.js
export const journalReducer = (state = initialState, action) => {
    switch (action.type) {
        case HELLO_WORLD:
        	console.log(action.message);
            return {
                ...state,
                message: action.message
            };
        default:
            return state
    }
};