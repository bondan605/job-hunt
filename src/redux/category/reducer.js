import * as types from "./constants";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CATEGORY_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload.categories,
      };
    case types.GET_CATEGORY_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
