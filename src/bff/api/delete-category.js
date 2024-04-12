export const deleteCategory = (categoryId) =>
    fetch(`http://localhost:3000/category/${categoryId}`, {
        method: 'DELETE'
    });
