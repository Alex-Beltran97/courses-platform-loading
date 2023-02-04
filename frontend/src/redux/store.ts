import { createStore, combineReducers } from 'redux';
import postReducer from './reducers/postReducer'

const rootReducer = combineReducers({ 
  postReducer
});

const store = createStore(rootReducer);

export default store;