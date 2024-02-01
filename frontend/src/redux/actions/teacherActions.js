import axios from "axios";
import {
  TEACHER_DETAILS_FAIL,
  TEACHER_DETAILS_REQUEST,
  TEACHER_DETAILS_SUCCESS,
  TEACHER_LOGIN_FAIL,
  TEACHER_LOGIN_REQUEST,
  TEACHER_LOGIN_SUCCESS,
  TEACHER_LOGOUT,
  TEACHER_UPDATE_FAIL,
  TEACHER_UPDATE_REQUEST,
  TEACHER_UPDATE_SUCCESS,
} from "../constants/teacherConstants";

export const login = (code, password) => async (dispatch) => {
  try {
    dispatch({
      type: TEACHER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/teachers/login",
      { code, password },
      config
    );
    dispatch({
      type: TEACHER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("teacherInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TEACHER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("teacherInfo");
  dispatch({ type: TEACHER_LOGOUT });
};

export const getTeacherDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEACHER_DETAILS_REQUEST,
    });

    const {
      teacherLogin: { teacherInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${teacherInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/teachers/${id}`, config);
    dispatch({
      type: TEACHER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEACHER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateTeacherDetails = (teacher) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEACHER_UPDATE_REQUEST,
    });

    const {
      teacherLogin: { teacherInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${teacherInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/teachers/profile`, teacher, config);
    dispatch({
      type: TEACHER_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEACHER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
