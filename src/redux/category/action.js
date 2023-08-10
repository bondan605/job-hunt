import { getCategoryService } from "../../services/category";
import * as types from "./constants";

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_CATEGORY_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await getCategoryService();

    dispatch({
      type: types.GET_CATEGORY_SUCCESS,
      payload: {
        categories: data.data.response,
      },
    });
  } catch (error) {
    dispatch({
      type: types.GET_CATEGORY_FAILED,
      payload: {
        error: error,
      },
    });
  }
};
