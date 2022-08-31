import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { mapInfoReducer } from "./mapInfoReducer";
import { loadingReducer } from "./loadingReducer";

export default combineReducers({
  user: userReducer,
  mapInfo: mapInfoReducer,
  loading: loadingReducer,
});
