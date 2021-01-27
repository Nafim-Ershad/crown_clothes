const INITIAL_STATE = {
    currentUser: null
}

// currentState is the previous user state
export const userReducer = (currentState = INITIAL_STATE, action)=>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...currentState,
                currentUser: action.payload
            }
        default:
            return currentState;
    }
}