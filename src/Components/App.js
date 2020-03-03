import React, { Component } from "react";
import Header from "Components/Header"; // looking for index.js
import Router from "Components/Router.js";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

export default App;
