import { SET_USER_DATA, SET_USER_LOGIN } from "../../redux/types";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { parseCookies } from "nookies";
import { useNavigate } from "react-router-dom";

const Layout = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    const { userData } = parseCookies();

    if (userData) {
      dispatch({ type: SET_USER_DATA, data: JSON.parse(userData) });
      dispatch({
        type: SET_USER_LOGIN,
        userLogin: true,
        loginErrorMessage: "",
      });
    } else {
      navigate("/");
    }
  }, [dispatch, navigate]);
  return <div>{props.children}</div>;
};

export default Layout;
