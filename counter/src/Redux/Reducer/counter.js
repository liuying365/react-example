import {INCREASE} from '../Action/counter'

const init = { count: 0 };
export default (state = init, action) => {
    let {type, poyload} = action;
    switch(type) {
        case INCREASE:
            return {...state, count: state.count + poyload};
        default:
            return state;
    }
}