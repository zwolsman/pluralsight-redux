const initialState = [];
export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return [...state, action.course];
    default:
      return state;
  }
}
