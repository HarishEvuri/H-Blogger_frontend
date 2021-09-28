import * as actionType from "../constants/actionTypes";

const blogsReducer = (
  state = {
    isLoading: false,
    blogs: [],
    blog: {},
  },
  action
) => {
  switch (action.type) {
    case actionType.START_LOADING:
      return { ...state, isLoading: true };
    case actionType.END_LOADING:
      return { ...state, isLoading: false };
    case actionType.FETCH_ALL:
      return {
        ...state,
        blogs: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case actionType.FETCH_BLOG:
      return { ...state, blog: action.payload.data };
    case actionType.CREATE:
      return { ...state, blog: action.payload.data };
    case actionType.UPDATE:
      return { ...state, blog: action.payload.data };
    case actionType.LIKE:
      return { ...state, blog: action.payload.data };

    default:
      return state;
  }
};

export default blogsReducer;
