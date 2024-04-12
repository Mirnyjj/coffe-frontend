export const transformCategories = (dbCategories) => ({
    id: dbCategories.id, 
    title: dbCategories.title, 
    imageUrl: dbCategories.image_url,
});