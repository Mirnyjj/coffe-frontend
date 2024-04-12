import { ACTION_TYPE } from "../actions";

const initialCategoriesState = [];

export const categoriesReducer = (state = initialCategoriesState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_CATEGORIES_DATA:
            return action.payload;
        case ACTION_TYPE.RESET_CATEGORIES_DATA:
            return initialCategoriesState;
        default: 
            return state;
    }
}