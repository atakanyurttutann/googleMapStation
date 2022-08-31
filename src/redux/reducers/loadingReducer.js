import * as types from "../types";

const initialProps = {
  loadingStatus: false,
};

export const loadingReducer = (state = initialProps, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loadingStatus: action.data,
      };

    default:
      return {
        ...state,
      };
  }
};
