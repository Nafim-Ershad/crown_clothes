// Actions  take in the actions or changes in the state object and passes to reducer
// They are functions that return an object

export const setCurrentUser = (user) => ({ // Takes in one parameter, might be the user auth or stuffs
    type: 'SET_CURRENT_USER',
    payload: user
})