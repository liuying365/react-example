import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table, Button } from 'antd'
import { addCart } from '../Redux/Action/cart'
import { getProductList } from '../Redux/Action/product'

class Product extends Component {
    componentWillMount() {
        this.props.getProductList()
    }
    render() {    
        let { addCart } = this.props;
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
                title: '价格',
                dataIndex: 'price'
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Button type="primary"
                        onClick={() => {addCart(record)}}
                    >加入购物车</Button>
                )
            }
        ]
        const {data} = this.props;
        return (
            <div>
                <h2>产品</h2>
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
        data: state.product.productList
    }
}

const mapDispatchToProps =  {
    addCart,
    getProductList
}


export default connect(mapStateToProps, mapDispatchToProps)(Product)
