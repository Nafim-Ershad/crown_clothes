export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const cartItemExists = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id);

    if (cartItemExists) {
        // map returns an array when there is nowhere to put the values
        return cartItems.map(cartItem =>
            cartItem.id === cartItemsToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    return [...cartItems, {...cartItemsToAdd, quantity: 1 }]

}