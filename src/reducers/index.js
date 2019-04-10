import data from './data';
import modal from './modal';
import isLoading from './is-loading';
import { combineReducers } from 'redux-immutable';


const rootReducers = combineReducers({
    data,
    modal,
    isLoading
})

export default rootReducers;