import { addProduct, updateProduct } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const saveProduct = async (hash, newProductData) => {
    const accessRole = [ROLE.ADMIN];

    const access = await sessions.access(hash, accessRole);
    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        }
    }

    const savedProduct = newProductData.id === '' 
    ? await addProduct(newProductData) 
    : await updateProduct(newProductData);

    return {
        error: null,
        res: savedProduct,
    }
};