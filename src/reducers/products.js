const initialState = {
    products: [],
    visibilityFilter: '',
    categoryId: 0,
    searchText: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                products: action.payload,
                visibilityFilter: ''
            };

        case 'SORT_PRODUCTS_BY_PRICE_HIGH_TO_LOW':
            return {
                ...state,
                products: state.products
                    .slice()
                    .sort((a, b) => b.price - a.price)
            };
        case 'SORT_PRODUCTS_BY_PRICE_LOW_TO_HIGH':
            return {
                ...state,
                products: state.products
                    .slice()
                    .sort((a, b) => a.price - b.price)
            };
        case 'SEARCH_BY_CATEGORY':
            console.log(`in reducer for selected category ${action.payload}`);

            return {
                ...state,
                visibilityFilter: 'SHOW_PRODUCTS_BY_CATEGORY',
                categoryId: action.payload,
                searchText: ''
            };
        case 'SHOW_PRODUCTS_BY_SEARCH':
            console.log(`in reducer for selected category ${action.payload}`);

            return {
                ...state,
                visibilityFilter: 'SHOW_PRODUCTS_BY_SEARCH',
                categoryId: '',
                searchText: action.payload
            };

        default:
            return state;
    }
};
