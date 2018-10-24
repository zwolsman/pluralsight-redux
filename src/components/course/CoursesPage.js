import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../store/actions/courseActions";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses Page</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { courses: state.courses };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(courseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
