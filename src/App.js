import React, { Component } from "react";
import Main from "./components/common/Main";
import Header from "./components/common/Header";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
