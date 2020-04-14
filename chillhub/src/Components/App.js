import React, { Component } from "react";
import Router from "Components/Router.js";
import GlobalStyles from "Components/GlobalStyles.js";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}
export default App;
