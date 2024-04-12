import { transformCategories } from "../bff/transformers";
import { setCategoryData } from "./set-category-data";

export const saveCategoryAsync = (requestServer, newCategoruData) => (dispatch) =>
    requestServer('saveCategory', newCategoruData).then((updatedProduct) => {
        const updateTransformCategory = transformCategories(updatedProduct.res);
        dispatch(setCategoryData(updateTransformCategory));

        return updateTransformCategory;
    });