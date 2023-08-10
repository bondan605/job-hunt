import * as types from "./constants";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

export default function featuredJobReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_FEATUREDJOB_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case types.GET_FEATUREDJOB_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload.data,
      };
    case types.GET_FEATUREDJOB_FAILED: {
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
