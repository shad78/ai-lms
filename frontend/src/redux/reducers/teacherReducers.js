import {
  TEACHER_LOGIN_REQUEST,
  TEACHER_LOGIN_SUCCESS,
  TEACHER_LOGIN_FAIL,
  TEACHER_LOGOUT,
  TEACHER_DETAILS_REQUEST,
  TEACHER_DETAILS_SUCCESS,
  TEACHER_DETAILS_FAIL,
  TEACHER_UPDATE_REQUEST,
  TEACHER_UPDATE_SUCCESS,
  TEACHER_UPDATE_FAIL,
} from "../constants/teacherConstants";

export const teacherLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_LOGIN_REQUEST:
      return { loading: true };
    case TEACHER_LOGIN_SUCCESS:
      return { loading: false, teacherInfo: action.payload };
    case TEACHER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case TEACHER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const teacherDetailsReducer = (state = { teacher: {} }, action) => {
  switch (action.type) {
    case TEACHER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case TEACHER_DETAILS_SUCCESS:
      return { loading: false, teacher: action.payload };
    case TEACHER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teacherUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_UPDATE_REQUEST:
      return { loading: true };
    case TEACHER_UPDATE_SUCCESS:
      return { loading: false, teacherInfo: action.payload, success: true };
    case TEACHER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
