import axios from 'axios';
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCT_FAILURE';
export const FETCH_PRODUCTDETAIL_REQUEST = 'FETCH_PRODUCTDETAIL_REQUEST';
export const FETCH_PRODUCTDETAIL_SUCCESS = 'FETCH_PRODUCTDETAIL_SUCCESS';
export const FETCH_PRODUCTDETAIL_FAILURE = 'FETCH_PRODUCTDETAIL_FAILURE';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const FILTER_BY_PRICE = 'FILTER_BY_PRICE';
export const ADD_TO_CART = 'ADD_TO_CART';

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_PRODUCTS_REQUEST });
        let dataURL = `https://fakestoreapi.com/products`;
        axios.get(dataURL).then((response) => {
            console.log({ response })
            dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
        }).catch((error) => {
            dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
        });
    }
};

export const fetchProductDetail = (productId) => {
    return (dispatch) => {
        dispatch({ type: FETCH_PRODUCTDETAIL_REQUEST });
        let dataURL = `https://fakestoreapi.com/products/${productId}`;
        axios.get(dataURL).then((response) => {
            dispatch({ type: FETCH_PRODUCTDETAIL_SUCCESS, payload: response.data });

        }).catch((error) => {
            dispatch({ type: FETCH_PRODUCTDETAIL_FAILURE, payload: error.message });
        });
    }
};




