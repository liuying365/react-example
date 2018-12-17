import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearCart } from '../Redux/Action/cart'

class Footer extends Component {
    render() {
        let { clearCart, cartList }  = this.props
        let num = 0;
        let price = 0;
        console.log(cartList)
        cartList.forEach(element => {
            num += element.num
            price += element.total_price
        });
        return (
            <div className="info">
                <span>
                总数：{num}
                </span>
                <span>
                总价：{price}
                </span>
                <span className="clear"
                    onClick={() => {clearCart()}}
                >清空购物车</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartList: state.cart.cartList
    }
}

const mapDispatchToProps = {
    clearCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
