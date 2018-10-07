import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../store/actions/courseActions";
import { bindActionCreators } from "../../../../../Library/Caches/typescript/3.0/node_modules/redux";

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
    this.props.createCourse(this.state.course);
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

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            onChange={this.onTitleChange}
            value={this.state.course.title}
          />
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
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
