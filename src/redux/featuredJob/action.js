import { getFeaturedJobService } from "../../services/job";
import * as types from "./constants";

export const getFeaturedJobs = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_FEATUREDJOB_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await getFeaturedJobService();

    dispatch({
      type: types.GET_FEATUREDJOB_SUCCESS,
      payload: {
        data: data.data.response,
      },
    });
  } catch (error) {
    dispatch({
      type: types.GET_FEATUREDJOB_FAILED,
      payload: {
        error,
      },
    });
  }
};
