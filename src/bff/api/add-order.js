
export const addOrder = (deliveryTerms, products, numberOrder) =>
    fetch('http://localhost:3000/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            delivery_terms: deliveryTerms,
            published_at: new Date(),
            products,
            number_order: numberOrder,
        })
    
    }).then((createdPost) => createdPost.json());