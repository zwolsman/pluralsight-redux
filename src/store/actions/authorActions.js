import { LOAD_AUTHORS_SUCCESS } from "./actionTypes";
import AuthorApi from "../../api/mockAuthorApi";

export function loadAuthorsSuccess(authors) {
  return { type: LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return async dispatch => {
    const authors = await AuthorApi.getAllAuthors();
    return dispatch(loadAuthorsSuccess(authors));
  };
}
