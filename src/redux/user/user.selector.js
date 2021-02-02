import { createSelector } from "reselect";

const selectUser = state => state.user;

// first arguments can be array of input selectors or output selectors
// or successive passing of the selectors can be use also instead of array, but fuction to be written once
// but the function will get two parameters as inputs from the return value of the first one
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)