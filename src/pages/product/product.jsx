import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router";
import { Button, Img, Title } from "../../components";
import { getProduct } from "../../bff/api";
import { useSelector } from "react-redux";
import { selectCategories } from "../../selectors";
import { upProductBasket } from "../../utils";
import { useLocalStorage } from "@uidotdev/usehooks";

const ProductContainer = ({className}) => {
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [findRes, setFindRes] = useState(false);
    const [basketUp, setBasket] = useLocalStorage('myBascket', [])
    const params = useParams();
    const categories = useSelector(selectCategories);

    
    const findProductAdd = async (productId) => {
        const findProduct = await basketUp.some((el) => el.id === productId);
        setFindRes(findProduct);
        return findProduct;
        
    };

    useEffect(() => {
        getProduct(params.id).then((productData) => {
            setProduct(productData);
                findProductAdd(productData.id)
                setIsLoading(false);
        });

    }, [findRes]);
    

    return !isLoading ? (
        <div className={className}>
          <div className="product-content">
            <Img 
                width="50%" 
                height="600px"
                imageUrl={product.imageUrl} 
                name={product.title} 
                inactive={true}
                radius="20px"
            />
            <div className="descriptions-block">
                <Title title={product.title} size="40px" />
                <div className="description">
                    Описание блюда: {product.description}
                </div>
                <div className="description">
                    Стоимость блюда: {product.price} ₽
                </div>
                <div className="description">
                    Категория блюда: 
                    {categories.map(({id, title}) => {
                        if(id === product.categoryId) {
                            return title
                        }
                    })}
                </div>
                <div className="shopping-button" onClick={() =>
                    setFindRes(findProductAdd(product.id))
                }>
                {findRes ?
                <Button widht="200px" children="Добавлено" onClick={() => 
                    setBasket(upProductBasket(basketUp, product))} 
                />
                : 
                <Button widht="200px" children="Добавить в карзину" onClick={() => 
                    setBasket(upProductBasket(basketUp, product))} 
                />
                }
                </div>
            </div>
          </div>
    </div>
    ) : null;
            
};

export const Product = styled(ProductContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    .product-content {
        display: flex;
        gap: 20px; 
    }
    .descriptions-block {
        display: flex;
        flex-direction: column;
        width: 100%;
        border-radius: 20px;
        background-color: #472727;
    }
    .description {
        display: flex;
        margin: 10px;
        padding: 20px 0 20px 0;
        justify-content: space-between;
        font-size: 24px;
        font-weight: 700;
        color: #e9b900;
        border-top: 1px solid #fff;

    }
    .shopping-button {
        display: flex;
        justify-content: center; 
        align-items: center;
    }
`;