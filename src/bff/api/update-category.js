export const updateCategory = ({id, imageUrl, title }) => 
    fetch(`http://localhost:3000/category/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            title,
            image_url: imageUrl,
        })
    
    })
    .then((loadedCategory) => {
        return loadedCategory.json()
    })