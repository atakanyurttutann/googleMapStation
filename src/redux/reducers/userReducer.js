import * as types from "../types";

const initialProps = {
  usersInfo: [
    {
      id: 1,
      name: "orhan",
      surname: "aydoğdu",
      password: "12341214",
      email: "orhan@aydogdu.com.tr",
      status: true,
    },
    {
      id: 2,
      name: "enes",
      surname: "kahraman",
      password: "98776241",
      email: "enes@kahraman.com.tr",
      status: false,
    },
    {
      id: 3,
      name: "enes",
      surname: "poyraz",
      password: "12416754",
      email: "enes@poyraz.com.tr",
      status: true,
    },
  ],
  userLogin: false,
  loginErrorMessage: "",
  userData: {},
};

export const userReducer = (state = initialProps, action) => {
  switch (action.type) {
    case types.SET_USER_LOGIN:
      return {
        ...state,
        userLogin: action?.userLogin,
        loginErrorMessage: action?.loginErrorMessage,
      };
    case types.SET_USER_DATA:
      return {
        ...state,
        userData: action?.data,
      };

    default:
      return {
        ...state,
      };
  }
};
