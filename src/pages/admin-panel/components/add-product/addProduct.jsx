import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../../../selectors";
import { useState } from "react";
import { Button, Input, Title } from "../../../../components";
import { saveProductAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";
import PropTypes from 'prop-types';

const AddProductContainer = ({className, setIsOpenAddProduct, setIsOpenEditProduct}) => {
    const categories = useSelector(selectCategories)
    const dispatch = useDispatch();
    const requestServer = useServerRequest()
    const [imageUrlValue, setImageUrlValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [categoryIdValue, setCategoryIdValue] = useState(0);

    const onSave = () => {
        dispatch(saveProductAsync(requestServer, {
            id: '',
            imageUrl: imageUrlValue,
            title: titleValue,
            description: descriptionValue,
            price: priceValue,
            categoryId: categoryIdValue,

        }))
        setIsOpenAddProduct(false);
        setIsOpenEditProduct(true);
    };

    const onImageChange = ({target}) => setImageUrlValue(target.value);
    const onTitleChange = ({target}) => setTitleValue(target.value);
    const onDescriptionChange = ({target}) => setDescriptionValue(target.value);
    const onPriceChange = ({target}) => setPriceValue(target.value);
    const onCategoryIdChange = ({target}) => setCategoryIdValue(target.value);


    return (
        <div className={className}>
            <div className="block-edit">
                <Title title="Фото" size="30px" top="0"/>
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
                <select className="category-product" onChange={onCategoryIdChange}>
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
                <Button children="Вернуться в меню"
                    onClick={() => setIsOpenAddProduct(false)}
                />
                <Button children="Coхранить"
                    onClick={() => onSave()}
                />
            </div>
    </div>
    );
};

export const AddProduct = styled(AddProductContainer)`
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

AddProduct.propTypes = {
    setIsOpenAddProduct: PropTypes.func.isRequired,
    setIsOpenEditProduct: PropTypes.func.isRequired,
}