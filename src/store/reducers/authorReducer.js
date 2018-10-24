import { LOAD_AUTHORS_SUCCESS } from "../actions/actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
};
