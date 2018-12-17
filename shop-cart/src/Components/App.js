import React, { Component } from 'react'
import Product from './Product.js'
import Cart from './Cart.js'
import Footer from './Footer.js'

class App extends Component {
    render() {
        return (
            <div className="shop-cart">
                <Product />
                <Cart />
                <Footer />
            </div>
        )
    }
}

export default App;
