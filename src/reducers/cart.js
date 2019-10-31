const initialState = {
    cart: [],
    total: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const productToAdd = state.cart.find(
                product => product.productId === action.payload.productId
            );
            if (productToAdd) {
                productToAdd.quantity += 1;
                return {
                    ...state,
                    total: state.total + parseFloat(action.payload.price)
                };
            } else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            productId: action.payload.productId,
                            quantity: 1
                        }
                    ],
                    total: state.total + parseFloat(action.payload.price)
                };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(
                    product => product.productId !== action.payload.productId
                ),
                total: state.total - action.payload.price
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
                total: 0
            };
        default:
            return state;
    }
};
