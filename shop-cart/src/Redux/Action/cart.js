import axios from 'axios'

export const ADD_CART = 'ADD_CART'
export const REMOVE_CART = 'REMOVE_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const GET_CART_LIST = 'GET_CART_LIST'

export const addCart = (payload) => {
    return {
        type: ADD_CART,
        payload
    }
}

export const removeCart = (payload) => {
    return {
        type: REMOVE_CART,
        payload
    }
}

export const clearCart = (payload) => {
    return {
        type: CLEAR_CART,
        payload
    }
}

export const getCartList = () => {
    return (dispatch) => {
        axios.get('/api/cart/list').then(res => {
            let data = res.data;
            if (data.code === 0) {
                dispatch({type: GET_CART_LIST, payload: data.data.cartList})
            }
        })
    }
}
