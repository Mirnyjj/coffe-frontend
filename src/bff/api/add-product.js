export const addProduct = (product) =>
    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            title: product.title,
            description: product.description,
            price: product.price,
            image_url: product.imageUrl,
            category_id: product.categoryId,
        })
    
    }).then((createdProduct) => {
        return createdProduct.json()
    });
