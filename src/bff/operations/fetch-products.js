import { getProducts} from "../api";

export const fetchProducts = async (categoryId) => {
    let productsCategory;
    let error;
    try {
        productsCategory = await getProducts(categoryId);
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
        productsCategory: productsCategory.map((products) => ({
                ...products,
        }))},
    }

};