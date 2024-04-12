export const addCategory = (category) =>
    fetch('http://localhost:3000/category', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            title: category.title,
            image_url: category.imageUrl,
        })
    
    }).then((createdCategory) => {
        return createdCategory.json();
    });