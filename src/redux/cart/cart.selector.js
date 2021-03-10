// selector made the code memoized
import { createSelector } from "reselect";
// install - npm install reselect

// Input selector
const selectCart = state => state.cart;

// Output Selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

// Can be made to do othe types of  functions too

// Output Selector
export const selectCartQuantity = createSelector(
    [selectCartItems],
    cartItems => (
        cartItems.reduce((accumalatedItems, cartItem) => accumalatedItems + cartItem.quantity, 0 // 0 is the default value for accumalatedItems
        )
    )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => (
        cartItems.reduce((accumalatedItems, cartItem) => accumalatedItems + cartItem.quantity * cartItem.price, 0 // 0 is the default value for accumalatedItems
        )
    )
)

// State passed to this as parameter is passed to the first argument of createSelector 
// it goes on untill the state reaches 'selectCart' function where state is used.
// Then the return value is returned from the first argument to the second one in the output selectors

// i.e state passed from mapStateToprops => selectCartQuantity => selectCartItems [as passed as first argument]
// => selectCart (state)

// Modified state is returned from selectCart => selectCartItems [used by and returned after used by second argument, which is a function]
// => selectCartQuantity [which does necessary work for the required component]