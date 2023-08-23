import { getLatestJobService } from "../../services/job";
import * as types from "./constants";

export const getLatestJobs = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_LATESTJOB_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await getLatestJobService();

    dispatch({
      type: types.GET_LATESTJOB_SUCCESS,
      payload: {
        data: data.data.response,
      },
    });
  } catch (error) {
    dispatch({
      type: types.GET_LATESTJOB_FAILED,
      payload: {
        error,
      },
    });
  }
};
