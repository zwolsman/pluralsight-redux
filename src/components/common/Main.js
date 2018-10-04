import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../home/HomePage";
import AboutPage from "../about/AboutPage";
import CoursesPage from "../course/CoursesPage";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
      </Switch>
    </main>
  );
};

export default Main;
