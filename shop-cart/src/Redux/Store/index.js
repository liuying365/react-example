import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import reducer from '../Reducer/index';

const thunk = () => {
    return (dispatch) => {
        return (action) => {
            if (typeof action === 'function') {
                action(dispatch);
            } else {
                dispatch(action);
            }
        }
    }
}

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
