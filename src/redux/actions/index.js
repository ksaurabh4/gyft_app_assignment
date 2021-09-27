import { api } from "../api";
import * as TYPE from "../constants/categoryConstants";

export const fetchCategories = () => async (dispatch) => {
    dispatch({ type: TYPE.CATEGORY_LIST_REQUEST });
    try {
        const { data } = await api.get("/home/categories");
        let newData = data.data;
        newData.map(element => {
            element.brands_name = element.brands_name.split(',');
            element.brands_slug = element.brands_slug.split(',');

            return element;

        });
        console.log(newData)
        dispatch({ type: TYPE.CATEGORY_LIST_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({ type: TYPE.CATEGORY_LIST_FAIL, payload: error.message });
    }
};
export const fetchBrandDetails = (brand) => async (dispatch) => {
    dispatch({ type: TYPE.BRAND_DETAILS_REQUEST });
    try {
        const { data } = await api.get(`/brand/${brand}`);
        dispatch({ type: TYPE.BRAND_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: TYPE.BRAND_DETAILS_FAIL, payload: error.message });
    }
};