import { signOut } from "../api";
import { AUTH, SIGNOUT } from "../constants/actionTypes";

export const auth = (data) => async (dispatch) => {
  dispatch({ type: AUTH, data });
};

export const signout = () => async (dispatch) => {
  await signOut();
  dispatch({ type: SIGNOUT });
};
