import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { loadCourses } from "./store/actions/courseActions";

const store = configureStore();
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
