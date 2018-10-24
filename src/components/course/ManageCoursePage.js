import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as courseActions from "../../store/actions/courseActions";
import CourseForm from "./CourseForm";
class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
  }

  updateCourseState = event => {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({ course });
  };

  saveCourse = event => {
    event.preventDefault();
    this.props.saveCourse(this.state.course);
  };

  render() {
    return (
      <CourseForm
        course={this.state.course}
        errors={this.state.errors}
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const authorOptions = state.authors.map(({ id, firstName, lastName }) => {
    return { value: id, text: `${firstName} ${lastName}` };
  });

  const course = {
    id: "",
    watchHref: "",
    title: "",
    authorId: "",
    length: "",
    category: ""
  };

  return {
    course,
    authors: authorOptions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(courseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
