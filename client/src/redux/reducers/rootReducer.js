import checkoutReducer from './checkoutReducers';
import shippingInfoReducer from './shippingInfoReducers'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    checkout: checkoutReducer,
    shippingInfo: shippingInfoReducer
})

export default rootReducer;