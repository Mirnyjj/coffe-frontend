import { transformProduct } from "../transformers";

const ALL_PRODUCTS_URL = `http://localhost:3000/products`;
const CATEGORY_PRODUCTS = `http://localhost:3000/products?category_id=`;

export const getProducts = async (categoryId) => {
    const url = categoryId === undefined ?  ALL_PRODUCTS_URL : CATEGORY_PRODUCTS + categoryId;
    return fetch(url).then((loadedProducts) => loadedProducts.json())
        .then((loadedProducts) => loadedProducts.map(transformProduct));
};
