import React, { Component } from "react";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header here</p>
        <Main />
      </div>
    );
  }
}

export default App;
