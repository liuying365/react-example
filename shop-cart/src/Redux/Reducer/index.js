import { combineReducers } from 'redux'

import cartRedux from './cart.js'
import ProdRedux from './product.js'

export default combineReducers({
    cart: cartRedux,
    product: ProdRedux
})