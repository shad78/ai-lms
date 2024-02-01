import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  teacherDetailsReducer,
  teacherLoginReducer,
  teacherUpdateReducer,
} from "./redux/reducers/teacherReducers";

const rootReducer = combineReducers({
  teacherLogin: teacherLoginReducer,
  teacherDetails: teacherDetailsReducer,
  teacherUpdate: teacherUpdateReducer,
});

const teacherInfoFromStorage = localStorage.getItem("teacherInfo")
  ? JSON.parse(localStorage.getItem("teacherInfo"))
  : null;

const initialState = {
  teacherLogin: { teacherInfo: teacherInfoFromStorage },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
