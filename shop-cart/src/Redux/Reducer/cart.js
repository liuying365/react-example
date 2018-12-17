import { ADD_CART, REMOVE_CART, CLEAR_CART } from '../Action/cart.js'

const cart = {
    cartList: []
};

const addListHandler = (state, payload) => {
    let list = [...state.cartList]
    if (list.length === 0) {
        list.push({...payload, num: 1, total_price: payload.price})
        return list;
    }
    let hasRecord = list.filter(item => item.id === payload.id)
    if (hasRecord.length) {
        list.map(item => {
            if (item.id === payload.id) {
                item.num++
                item.total_price = item.num * item.price
            }
            return item
        })
        return list
    }
    list.push({...payload, num: 1, total_price: payload.price})
    return list
}

const removeListHandler = (state, payload) => {
    let list = [...state.cartList]
    let i = null;
    list.forEach((item, index) => {
        if (item.id === payload.id) {
            i = index
        }
    })
    list.splice(i, 1)
    return list
}

export default (state = cart, action) => {
    let {type, payload} = action
    switch(type) {
        case ADD_CART:
            let addList = addListHandler(state, payload)
            return {...state, cartList: addList}
        case REMOVE_CART:
            let rmList = removeListHandler(state, payload)
            return {...state, cartList: rmList}
        case CLEAR_CART: 
            return {...state, cartList: []}
        default:
            return state
    }
}