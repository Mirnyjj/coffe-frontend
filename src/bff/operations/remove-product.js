import { deleteProduct } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const removeProduct = async (hash, id) => {
    const accessRole = [ROLE.ADMIN];


    const access = await sessions.access(hash, accessRole);
    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        }
    }

    await deleteProduct(id);

    return {
        error: null,
        res: true,
    }

};