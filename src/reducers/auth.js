import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      return { ...state, authData: action.data };
    case actionType.SIGNOUT:
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
