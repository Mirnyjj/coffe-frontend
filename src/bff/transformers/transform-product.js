export const transformProduct = (dbProduct) => ({
    id: dbProduct.id, 
    title: dbProduct.title, 
    imageUrl: dbProduct.image_url,
    categoryId: dbProduct.category_id,
    price: dbProduct.price, 
    description: dbProduct.description, 

});