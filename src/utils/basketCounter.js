
export const basketCounter = (basket) => {
    let sumCounter = 0;
    
    let sumQuantity = 0;
    
    basket.forEach(element => {
        const sum = Number(element.price) * Number(element.amount);
        sumCounter += sum;
        const quantity = Number(element.amount);
        sumQuantity += quantity;
    });

    return {sumCounter, sumQuantity}
}


