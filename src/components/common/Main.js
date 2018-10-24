import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../home/HomePage";
import AboutPage from "../about/AboutPage";
import CoursesPage from "../course/CoursesPage";
import ManageCoursePage from "../course/ManageCoursePage";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route exact path="/course" component={ManageCoursePage} />
        <Route path="/course/:id" component={ManageCoursePage} />
      </Switch>
    </main>
  );
};

export default Main;
