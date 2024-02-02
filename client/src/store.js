import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  newEmployeeReducer,
  allEmployeesReducer,
  employeeDetailsReducer,
  updateEmployeeReducer,
  deleteEmployeeReducer,
} from "./reducer/employeeReducer";
import { userReducer } from "./reducer/userReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  newEmployee: newEmployeeReducer,
  allEmployee: allEmployeesReducer,
  getEmployeeDetails: employeeDetailsReducer,
  updateEmployee: updateEmployeeReducer,
  deleteEmployee: deleteEmployeeReducer,
  users: userReducer,
});

const middleWare = [thunk];
const store = configureStore(
  { reducer: reducers },
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
