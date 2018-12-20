import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table, Button } from 'antd'
import { removeCart, getCartList } from '../Redux/Action/cart'

class Cart extends Component {
    componentWillMount() {
        this.props.getCartList();
    }
    render() {
        let { data, removeCart } = this.props;
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '名称',
                dataIndex: 'name'
            },
            {
                title: '单价',
                dataIndex: 'price'
            },
            {
                title: '数量',
                dataIndex: 'num'
            },
            {
                title: '总价',
                dataIndex: 'total_price'
            },
            {
                title: '操作',
                render: (text, record) => (
                    <Button type="danger"
                        onClick={() => {removeCart(record.id)}}
                    >删除</Button>
                )
            }
        ]
        return (
            <div>
                <h2>购物车</h2>
                <Table dataSource={data}
                    columns={columns}
                    bordered={true}
                    pagination={false}
                    rowKey={record => record.id}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.cart.cartList
    }
}

const mapDispatchToProps = {
    removeCart,
    getCartList
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
