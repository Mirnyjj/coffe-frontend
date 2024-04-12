import { transformProduct } from "../bff/transformers";
import { setProductData } from "./set-product-data";

export const saveProductAsync = (requestServer, newProductData) => (dispatch) =>
    requestServer('saveProduct', newProductData).then((updatedProduct) => {
        const updateTransformProduct = transformProduct(updatedProduct.res);
        dispatch(setProductData(updateTransformProduct));

        return updateTransformProduct;
    });