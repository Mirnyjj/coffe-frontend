import { styled } from "styled-components";
import { useLayoutEffect, useState } from "react";
import { Button, Input, Title } from "../../../../../../components";
import { selectCategories } from "../../../../../../selectors";
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from "../../../../../../hooks";
import { saveProductAsync } from "../../../../../../actions";
import PropTypes from 'prop-types';

const EditBlockProductContainer = ({className, isEditProduct, setIsEditProduct }) => {
    const {id, title, imageUrl, description, categoryId, price} = isEditProduct;
    const categories = useSelector(selectCategories)
    const requestServer = useServerRequest();
    const dispatch = useDispatch()
    const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
    const [titleValue, setTitleValue] = useState(title);
    const [descriptionValue, setDescriptionValue] = useState(description);
    const [priceValue, setPriceValue] = useState(price);
    const [categoryIdValue, setCategoryIdValue] = useState(categoryId);


    useLayoutEffect(() => {
        setImageUrlValue(imageUrl);
        setTitleValue(title);
        setDescriptionValue(description);
        setPriceValue(price);
        setCategoryIdValue(categoryId);
    }, [title, imageUrl, description, categoryId, price])

    const onSave = () => {
        dispatch(saveProductAsync(requestServer, {
            id,
            imageUrl: imageUrlValue,
            title: titleValue,
            description: descriptionValue,
            price: priceValue,
            categoryId: categoryIdValue,

        }))
        setIsEditProduct(null)
    };

    const onImageChange = ({target}) => setImageUrlValue(target.value);
    const onTitleChange = ({target}) => setTitleValue(target.value);
    const onDescriptionChange = ({target}) => setDescriptionValue(target.value);
    const onPriceChange = ({target}) => setPriceValue(target.value);
    const onCategoryIdChange = ({target}) => setCategoryIdValue(target.value);

    return (
        <div className={className} key={id}>
            <div className="block-edit">
                <Title type="url" title="Фото" size="30px" top="0"/>
                <Input value={imageUrlValue} placeholder="URL фото..." onChange={onImageChange}/>     
            </div>
            <div className="block-edit">
                <Title title="Название" size="30px" top="0"/>
                <Input value={titleValue} placeholder="Название..." onChange={onTitleChange}/>     
            </div>
            <div className="block-edit">
                <Title title="Описание" size="30px" top="0"/>
                <Input value={descriptionValue} placeholder="Описание..." onChange={onDescriptionChange}/>     
            </div>
            <div className="block-edit">
                <Title title="Категория" size="30px" top="0"/>
                <select className="category-product" value={categoryIdValue} onChange={onCategoryIdChange}>
                            {categories.map(({id: categoryId, title: categoryName}) => (
                                <option key={categoryId} value={categoryId}>{categoryName}</option>
                            ))}
                        </select>      
            </div>
            <div className="block-edit">
                <Title title="Стоимость" size="30px" top="0"/>
                <Input  width="30%" type="number" value={priceValue} placeholder="Стоимость..." onChange={onPriceChange}/>      
            </div>
            <div className="block-edit">
                <Button children="Вернуться в меню редактирования"
                    onClick={() => setIsEditProduct(null)}
                />
                <Button children="Coхранить"
                    onClick={() => onSave()}
                />
            </div>
    </div>
    );
};

export const EditBlockProduct = styled(EditBlockProductContainer)`
    display: flex;
    flex-direction: column;
    .block-edit {
        display: flex;
        gap: 10px;
    }
    .category-product {
        width: 30%;
        height: 50px;
        margin: 0 0 10px;
        border: 1px solid #000;
        border-radius: 5px;
        padding: 10px;
        font-size: 18px;
    }
`;

EditBlockProduct.propTypes = {
    isEditProduct: PropTypes.object.isRequired,
    setIsEditProduct: PropTypes.func.isRequired,
}
