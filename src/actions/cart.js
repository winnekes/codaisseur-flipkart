export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        payload: id
    };
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    };
}

export function clearCart() {
    return {
        type: CLEAR_CART
    };
}
