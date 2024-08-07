import { createStore, combineReducers } from 'redux';
import numberReducers from './reducers/numberReducers';
const reducers = combineReducers({
    number: numberReducers
});

function storeConfig() { return createStore(reducers) }

export default storeConfig