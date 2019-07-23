import {combineReducers} from 'redux';
import  categoryReducer from './categoryReducer';
import  accountReducer from './accountReducer';
import  budgetReducer from './budgetReducer';
import  errorReducer from './errorReducer';
import  authReducer from './authReducer';

export default combineReducers({
    category: categoryReducer,
    budget:budgetReducer,
    account:accountReducer,
    error:errorReducer,
    auth:authReducer
})