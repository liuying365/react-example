export const ADD_CART = 'ADD_CART'
export const REMOVE_CART = 'REMOVE_CART'
export const CLEAR_CART = 'CLEAR_CART'

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
