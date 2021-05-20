import { combineReducers } from "redux";
import DataReducer from "../Reducers/Reducers";

const AllReducer = combineReducers({
  Data: DataReducer,
});
export default AllReducer;
