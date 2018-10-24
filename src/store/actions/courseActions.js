import {
  LOAD_COURSES_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  CREATE_COURSE_SUCCESS
} from "./actionTypes";
import courseApi from "../../api/mockCourseApi";

export function loadCoursesSuccess(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  };
}

export function updateCourseSuccess(course) {
  return {
    type: UPDATE_COURSE_SUCCESS,
    course
  };
}

export function createCourseSuccess(course) {
  return {
    type: CREATE_COURSE_SUCCESS,
    course
  };
}

export function loadCourses() {
  return async dispatch => {
    const courses = await courseApi.getAllCourses();
    dispatch(loadCoursesSuccess(courses));
  };
}

export function saveCourse(course) {
  return async dispatch => {
    const savedCourse = await courseApi.saveCourse(course);
    if (course.id) {
      dispatch(updateCourseSuccess(savedCourse));
    } else {
      dispatch(createCourseSuccess(savedCourse));
    }
  };
}
