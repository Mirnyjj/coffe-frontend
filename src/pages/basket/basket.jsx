import { styled } from "styled-components";
import { Title } from "../../components";
import { GeneralBasket, TableProductInBasket } from "./component";



const BasketContainer = ({className}) => {
    
        return (
            <div className={className}>
                <Title title="Корзина" size="50px"/>
                <TableProductInBasket />
                <GeneralBasket />
            </div>
        );
    };
    
    export const Basket = styled(BasketContainer)`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;
   