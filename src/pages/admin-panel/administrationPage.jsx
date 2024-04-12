import { styled } from "styled-components"
import { Button, PrivateContent, Title } from "../../components"
import { useEffect, useState } from "react"
import { AddCategory } from "./components/add-category/addCategory"
import { AddProduct } from "./components/add-product/addProduct"
import { EditCategory } from "./components/edit-category/editCategory"
import { EditProduct } from "./components/edit-product/editProduct"
import { useSelector } from "react-redux"
import { selectUserRole } from "../../selectors"
import { checkAccess } from "../../utils"
import { ROLE } from "../../constants"
import { useServerRequest } from "../../hooks"

const AdministrationPageContainer = ({className}) => {
    const [isOpenEditProduct, setIsOpenEditProduct] = useState(false);
    const [isOpenEditCategory, setIsOpenEditCategory] = useState(false);
    const [isOpenAddProduct, setIsOpenAddProduct] = useState(false);
    const [isOpenAddCategory, setIsOpenAddCategory] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const requestServer = useServerRequest()
    const userRole = useSelector(selectUserRole);

    useEffect(() => {
        if(!checkAccess([ROLE.ADMIN], userRole)) {
            return;
        };
        Promise.all([
            requestServer('fetchUsers'), 
            requestServer('fetchRoles'),
        ]).then(([usersRes, rolesRes]) => {
            if (usersRes.error || rolesRes.error) {
                setErrorMessage(usersRes.error || rolesRes.error);
                return;
            };
        });
       
    }, [requestServer, userRole])

    return (
        <PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
        <div className={className}>
            <Title title="Страница администратора" size="50px" />
            <div className="admin-page">
                {!isOpenAddCategory && !isOpenAddProduct && !isOpenEditCategory && !isOpenEditProduct &&
                    <div className="control-panel">
                        <Title title="Выберите действие" size="40px" /> 
                        <Button children="Редактировать товары" onClick={() => setIsOpenEditProduct(true)}/> 
                        <Button children="Редактировать категории" onClick={() => setIsOpenEditCategory(true)} /> 
                        <Button children="Добавить товар" onClick={() => setIsOpenAddProduct(true)} /> 
                        <Button children="Добавить категорию" onClick={() => setIsOpenAddCategory(true)} /> 
                    </div>
                }
                {isOpenAddCategory 
                && <AddCategory 
                        setIsOpenAddCategory={setIsOpenAddCategory}
                        setIsOpenEditCategory={setIsOpenEditCategory} 
                    />}
                {isOpenAddProduct 
                && <AddProduct 
                        setIsOpenAddProduct={setIsOpenAddProduct}
                        setIsOpenEditProduct={setIsOpenEditProduct} 
                    />}
                {isOpenEditCategory 
                && <EditCategory 
                    setIsOpenEditCategory={setIsOpenEditCategory} 
                    />}
                {isOpenEditProduct 
                && <EditProduct 
                    setIsOpenEditProduct={setIsOpenEditProduct} 
                    />}
            </div>
        </div>
        </PrivateContent>
    )

    
}

export const AdministrationPage = styled(AdministrationPageContainer)`
    .admin-page {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
        padding: 20px;
        background-color: #714545;
        border-radius: 10px;
    }
    .control-panel {
        display: flex;
        flex-direction: column;
        margin-left: 25%;
        gap: 20px;
        width: 50%;
    }
`