import * as productActions from './products.actions';

let initialState = {
    allProducts: [],
    productDetail: {},
    category: [],
    cart: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case productActions.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                category: action.payload,
                allProducts: action.payload
            };
        case productActions.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
            };
        case productActions.FETCH_PRODUCTDETAIL_SUCCESS:
            return {
                ...state,
                productDetail: action.payload
            };
        case productActions.FILTER_BY_CATEGORY:
            if (action.payload === "All") {
                return {
                    ...state,
                    allProducts: state.category
                }
            } else {
                const filterByCategory = state.category.filter(element => element.category === action.payload)
                return {
                    ...state,
                    allProducts: filterByCategory
                }
            };
        case productActions.FILTER_BY_PRICE:
            const sortRes = state.category.sort((a, b) => {
                if (action.payload === "all") {
                    return a.id > b.id ? 1 : -1;
                }
                if (action.payload === "low") {
                    return a.price > b.price ? 1 : -1;
                }
                if (action.payload === "high") {
                    return a.price < b.price ? 1 : -1;
                }
            });
            console.log("sortRes", sortRes)
            return {
                ...state,
                allProducts: [...sortRes]
            };
        case productActions.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        default: return state;
    }
};
