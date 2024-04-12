import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useServerRequest } from "../../../../hooks";
import { useEffect, useState } from "react";
import { Dish } from "./components/dish";

const DishCardContainer = ({className}) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const requestServer = useServerRequest();

    useEffect(() => {
        requestServer('fetchProducts', categoryId).then(({ res: {productsCategory}}) => {  
                setProducts(productsCategory);
        });
    }, [requestServer]);

    return (
        <div className={className}>
            {products.map(({ id, title, imageUrl, price}) => {
                return <Dish key={id} id={id} title={title} imageUrl={imageUrl} price={price} />
                }
               )
            }
        </div>
    )
}


export const DishCard = styled(DishCardContainer)`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 20px 80px;

`;

