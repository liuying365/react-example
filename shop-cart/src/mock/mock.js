import Mock from 'mockjs';

const Random = Mock.Random;

const common = {
    code: 0,
    data: {},
    msg: 'OK'
};

const productList = function () {
    const data = {
        productList: [
            {
                id: Random.integer(100000, 999999),
                name: '香辣虾',
                price: 80
            },
            {
                id: Random.integer(100000, 999999),
                name: '涮羊肉',
                price: 80
            },
            {
                id: Random.integer(100000, 999999),
                name: '红烧肉',
                price: 50
            },
            {
                id: 333333,
                name: '梅菜扣肉',
                price: 30
            }
        ]
    }
    return Object.assign(common, { data: data });
};

const cartList = function () {
    const data = {
        cartList: [
            {
                id: 333333,
                name: '梅菜扣肉',
                price: 30,
                num: 1,
                total_price: 30
            }
        ]
    }
    return Object.assign(common, { data: data });
};

Mock.mock('/api/product/list', 'get', productList);
Mock.mock('/api/cart/list', 'get', cartList);
