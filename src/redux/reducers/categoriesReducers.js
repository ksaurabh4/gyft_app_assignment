import * as TYPE from "../constants/categoryConstants";

export const categoryReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case TYPE.CATEGORY_LIST_REQUEST:
            return { loading: true };
        case TYPE.CATEGORY_LIST_SUCCESS:
            return { loading: false, success: true, category: action.payload };
        case TYPE.CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const brandReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case TYPE.BRAND_DETAILS_REQUEST:
            return { loading: true };
        case TYPE.BRAND_DETAILS_SUCCESS:
            return { loading: false, success: true, card: action.payload.card, brandDetails: action.payload.data, products: action.payload.products };
        case TYPE.BRAND_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case TYPE.SELECT_BRAND:
            return { brand: action.payload };
        case TYPE.RESET_BRAND:
            return { brand: {}, products: [], card: [] };
        default:
            return state;
    }
};