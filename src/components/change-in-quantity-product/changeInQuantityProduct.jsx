import { styled } from "styled-components";
import { Icon } from "../icon/icon";
import { deleteProductBasket, upProductBasket } from "../../utils";
import { useLocalStorage } from "@uidotdev/usehooks";
import PropTypes from 'prop-types';

const ChangeInQuantityProductContainer = ({className, product}) => {
    const [basketUp, setBasket] = useLocalStorage('myBascket', []);

    return (
        <div className={className}>
            <Icon id='fa-minus-square-o'
                size='30px'
                color='#2552d7'
                onClick={() => 
                    {setBasket(
                        deleteProductBasket(basketUp, product.id, product.amount)
                        )}
                }
            />
            {product.amount}
            <Icon id='fa-plus-square-o'
                size='30px'
                color='#2552d7'
                onClick={() => 
                    {setBasket(
                        upProductBasket(basketUp, product)
                        )}
                }
            />
        </div>
    )
};

export const ChangeInQuantityProduct = styled(ChangeInQuantityProductContainer)`
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
`

ChangeInQuantityProduct.propTypes = {
    product: PropTypes.object,
}