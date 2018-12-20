import { GET_PRODUCT_LIST } from '../Action/product';

const productInit = {
    productList: []
}

export default (state = productInit, action) => {
    let { type, data } = action;
    switch(type){
        case GET_PRODUCT_LIST:
            return {...state, productList: data};
        default:
            return state
    }
}