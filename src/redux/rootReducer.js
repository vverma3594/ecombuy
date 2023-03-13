import {combineReducers} from 'redux';
import * as productReducer from './products/products.reducer';

export const rootReducer = combineReducers({
    product : productReducer.reducer
});
