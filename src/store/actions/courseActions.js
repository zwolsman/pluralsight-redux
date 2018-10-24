import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "./actionTypes";
import courseApi from "../../api/mockCourseApi";

export function createCourse(course) {
  return {
    type: CREATE_COURSE,
    course
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCourses() {
  return async dispatch => {
    const courses = await courseApi.getAllCourses();
    dispatch(loadCoursesSuccess(courses));
  };
}
