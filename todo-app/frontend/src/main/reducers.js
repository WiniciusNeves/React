import { combineReducers } from 'redux';
import todosReducer from '../todo/todoReducer';


const rootReducer = combineReducers({
    todo: todosReducer
});

export default rootReducer;
