import { useEffect, useMemo, useState } from "react";
import { styled } from "styled-components";
import { MenuCard, Pagination, Search } from "./components";
import { PAGINATION_LIMIT } from "../../constants";
import { debounce, getLastPageFromLinks } from "./utils";
import { useSelector } from "react-redux";
import { selectCategories } from "../../selectors";

const MenuContainer = ({className}) => {
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState();
    const [shouldSearch, setShouldSearch] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');
    const categories = useSelector(selectCategories);

    const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

    const onSearch = (e) => {
        setSearchPhrase(e.target.value);
        startDelayedSearch(!shouldSearch)
    };

    return (
        <div className={className}>
            <div className="products-and-search">
            <Search searchPhrase={searchPhrase} onChange={onSearch}/>
            {categories.length > 0 ? <div className="categories-list">
                {categories.map(({id, title, imageUrl }) => <MenuCard 
                    key={id}
                    id={id}
                    title={title}
                    imageUrl={imageUrl}
                />)}
            </div>
            : <div className="no-categories-found">Блюда не найдены</div>}
            </div>
            {lastPage > 1 && categories.length > 0 && <Pagination setPage={setPage} page={page} lastPage={lastPage}/>}
        </div>
    );
};


export const Menu = styled(MenuContainer)`
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    & .categories-list {
        display: flex;
        flex-wrap: wrap;
        padding: 20px 20px 80px;

    }

    .no-categories-found {
        text-align: center;
        font-size: 18px;
        margin-top: 40px;

    }
`;