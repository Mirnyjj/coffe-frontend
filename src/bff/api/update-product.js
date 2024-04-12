export const updateProduct = ({id, imageUrl, title, description, price, categoryId}) => 
    fetch(`http://localhost:3000/products/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            title,
            image_url: imageUrl,
            price,
            category_id: categoryId,
            description 
        })
    
    })
    .then((loadedProduct) => loadedProduct.json())