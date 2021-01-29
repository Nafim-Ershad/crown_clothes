import {userActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

// currentState is the previous user state
export const userReducer = (currentState = INITIAL_STATE, action)=>{
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...currentState,
                currentUser: action.payload
            }
        default:
            return currentState;
    }
}

// Reducer returns an object through a function