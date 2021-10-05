import {
  START_LOADING,
  END_LOADING,
  FETCH_BLOG,
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchBlog(id);
    dispatch({ type: FETCH_BLOG, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
