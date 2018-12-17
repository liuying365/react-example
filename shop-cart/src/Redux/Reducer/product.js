const product = {
    productList: [
        {
            id: 11,
            name: '香辣虾',
            price: 80
        },
        {
            id: 25,
            name: '涮羊肉',
            price: 80
        },
        {
            id: 33,
            name: '红烧肉',
            price: 50
        },
        {
            id: 12,
            name: '梅菜扣肉',
            price: 30
        }
    ]
}

export default (state = product, active) => {
    return state
}