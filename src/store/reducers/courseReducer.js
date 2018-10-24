import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../actions/actionTypes";

const initialState = [];
export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, Object.assign({}, action.course)];
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
