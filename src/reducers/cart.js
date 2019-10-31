const initialState = {
    cart: [],
    total: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [action.payload, ...state.cart],
                total: state.total + action.payload.cost
            };
        case 'REMOVE_FROM_CART':
            return;
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
