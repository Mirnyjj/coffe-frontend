import { transformCategories } from "../transformers";


export const getСategories = async () => {
    return fetch(`http://localhost:3000/category`)
    .then((loadedСategories) => loadedСategories.json())
    .then((loadedСategories) => {
        return loadedСategories && loadedСategories.map(transformCategories)
    });
};
