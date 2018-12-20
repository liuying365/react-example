import axios from 'axios';

export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';

export const getProductList = (state) => {
    return (dispatch) => {
        axios.get('/api/product/list').then(res => {
            let data = res.data;
            if (data.code === 0) {
                dispatch({type: GET_PRODUCT_LIST, data: data.data.productList});
            }
        });
    }
}
