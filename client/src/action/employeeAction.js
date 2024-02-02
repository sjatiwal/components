import {
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_FAIL,
  ALL_EMPLOYEE_REQUEST,
  ALL_EMPLOYEE_SUCCESS,
  ALL_EMPLOYEE_FAIL,
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,
  EMPLOYEE_DETAILS_FAIL,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAIL,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAIL,
} from "../constant/employeeConstant";

import backend from "../helper/axios";

export const createEmployee =
  ({
    firstName,
    lastName,
    email,
    mobileNo,
    gender,
    dob,
    address,
    selectedCountry,
    selectedState,
    skills,
  }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_EMPLOYEE_REQUEST });

      const config = {
        headers: {
          "content-Type": "application/json",
        },
      };

      const { data } = await backend.post(
        "/api/v1/employee/new",
        {
          firstName,
          lastName,
          email,
          mobileNo,
          gender,
          dob,
          address,
          selectedCountry,
          selectedState,
          skills,
        },
        config
      );
      dispatch({ type: CREATE_EMPLOYEE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_EMPLOYEE_FAIL,
        payload: error,
      });
    }
  };

export const getAllEmployees =
  (name = "", mobileNo = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_EMPLOYEE_REQUEST });

      const { data } = await backend.get(
        `/api/v1/employee/all?name=${name}&mobileNo=${mobileNo}`
      );

      dispatch({ type: ALL_EMPLOYEE_SUCCESS, payload: data.employees });
    } catch (error) {
      dispatch({
        type: ALL_EMPLOYEE_FAIL,
        payload: error,
      });
    }
  };

// Get Employee Details
export const getEmployeeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_DETAILS_REQUEST });

    const { data } = await backend.get(`/api/v1/employee/${id}`);

    dispatch({ type: EMPLOYEE_DETAILS_SUCCESS, payload: data.employee });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Update Employee
export const updateEmployee =
  (
    id,
    firstName,
    lastName,
    email,
    mobileNo,
    gender,
    dob,
    address,
    selectedCountry,
    selectedState,
    skills
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: UPDATE_EMPLOYEE_REQUEST });
      const config = {
        headers: {
          "content-Type": "application/json",
        },
      };

      const { data } = await backend.put(
        `/api/v1/employee/update/${id}`,
        {
          firstName,
          lastName,
          email,
          mobileNo,
          gender,
          dob,
          address,
          country: selectedCountry.name,
          state: selectedState.name ? selectedState.name : selectedState,
          skills,
        },
        config
      );

      dispatch({ type: UPDATE_EMPLOYEE_SUCCESS, payload: data.employee });
    } catch (error) {
      dispatch({
        type: UPDATE_EMPLOYEE_FAIL,
        payload: error,
      });
    }
  };

//Delete Employee
export const deleteEmployee = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_EMPLOYEE_REQUEST });

    const { data } = await backend.delete(`/api/v1/employee/delete/${id}`);

    dispatch({ type: DELETE_EMPLOYEE_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: DELETE_EMPLOYEE_FAIL,
      payload: error,
    });
  }
};
