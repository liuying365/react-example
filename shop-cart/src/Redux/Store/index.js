import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Reducer/index';

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
