import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as courseActions from "../../store/actions/courseActions";

class ManageCoursePage extends Component {
  render() {
    return (
      <div>
        <h1>Manage course</h1>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    state
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
