import {
  LOAD_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS
} from "../actions/actionTypes";

const initialState = [];
export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    case CREATE_COURSE_SUCCESS:
      return [...state, Object.assign({}, action.course)];
    case UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
