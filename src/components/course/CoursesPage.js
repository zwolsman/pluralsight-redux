import React, { Component } from "react";

export default class CoursesPage extends Component {
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

  onClickSave() {
    console.log("Save");
  }
  render() {
    return (
      <div>
        <h1>Courses Page</h1>
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
