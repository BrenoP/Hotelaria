import { combineReducers } from "redux";
import userReducer from "./user";
import hotelReducer from "./hotel";

export const reducers = combineReducers({
   userReducer,
   hotelReducer
});
