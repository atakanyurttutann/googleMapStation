import {
  SET_LOGIN_MESSAGE,
  SET_USER_LOGIN,
  SET_LOADING,
  SET_USER_DATA,
} from "../types";
import nookies from "nookies";
export const loginAction = (data) => {
  return async (dispatch, getState) => {
    try {
      const { usersInfo } = getState()?.user;
      const user = usersInfo.find(
        (q) => q.email === data.email && q.password === data.password
      );
      if (user) {
        dispatch({ type: SET_USER_DATA, data: user });
        dispatch({
          type: SET_USER_LOGIN,
          userLogin: true,
          loginErrorMessage: "",
        });
        nookies.set(null, "userData", JSON.stringify(user));
      } else {
        dispatch({
          type: SET_USER_LOGIN,
          userLogin: false,
          loginErrorMessage: "Bilgileriniz kontrol ediniz!",
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: SET_LOADING, data: false });
    }
  };
};
export const logoutAction = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SET_LOADING, data: true });
      nookies.destroy(null, "userData");
      dispatch({ type: SET_USER_DATA, data: {} });
      dispatch({ type: SET_USER_LOGIN, userLogin: false });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: SET_LOADING, data: false });
    }
  };
};
