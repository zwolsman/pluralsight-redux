import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../store/actions/courseActions";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  redirectToAddCoursePage = () => {
    this.props.history.push("/course");
  };

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add course"
          className="btn btn-primary mb-3"
          onClick={this.redirectToAddCoursePage}
        />
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
