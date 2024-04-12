import { getProduct} from "../api";
import { getProductCommentsWithAuthor } from "../utils";

export const fetchProduct = async (productId) => {
    let product;
    let error;
    try {
        product = await getProduct(productId);
    } catch (productError) {
        error = productError;
    };

    if(error) {
        return {
            error,
            res: null,
        };
    };


    return {
        error: null,
        res: {
            ...product,
        },
    }

};