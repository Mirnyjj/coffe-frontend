import { addCategory, updateCategory } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const saveCategory = async (hash, newCategory) => {
    const accessRole = [ROLE.ADMIN];

    const access = await sessions.access(hash, accessRole);
    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        }
    }

    const savedCategory = newCategory.id === '' 
    ? await addCategory(newCategory) 
    : await updateCategory(newCategory);

    return {
        error: null,
        res: savedCategory,
    }
};