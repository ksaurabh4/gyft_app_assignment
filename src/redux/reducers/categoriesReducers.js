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