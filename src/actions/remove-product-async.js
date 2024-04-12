import { setProductData } from "./set-product-data";

export const removePostAsync = (requestServer, id) => (dispatch) => {
    requestServer('removeProduct', id).then((postProduct) => {
        dispatch(setProductData(postProduct.res));
    })
};