import { getProducts, getСategories } from '../api'

export const fetchCategories = async (searchPhrase, page, limit) => {
    const [{categories, links}, products] = await Promise.all([getСategories(searchPhrase, page, limit), getProducts()]);

    return {
        error: null,
        res: {
            categories: categories.map((category) => ({
                ...category,
                products,
        })),
        links,
    },

    };

};