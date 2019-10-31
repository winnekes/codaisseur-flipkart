export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: {
            productId: product.id,
            price: product.price
        }
    };
}

export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            productId: product.id,
            price: product.price
        }
    };
}

export function clearCart() {
    return {
        type: CLEAR_CART
    };
}
