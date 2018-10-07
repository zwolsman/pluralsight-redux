import React, { Component } from "react";
import { connect } from "react-redux";
import { createCourse } from "../store/actions/courseActions";

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };
  }

  onTitleChange = event => {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course });
  };

  onClickSave = () => {
    this.props.dispatch(createCourse(this.state.course));
  };

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses Page</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Save" onClick={this.onClickSave} />
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return { courses: state.courses };
}
export default connect(mapStateToProps)(CoursesPage);
