import React, { Component, Fragment } from "react";

import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import ModuleContainer from "./components/moduleContainer";

import "./main.scss";
import "../public/index.html";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    console.log("In constructor");
  }

  componentDidMount() {
    console.log("App Mounted");
  }

  render() {
    return (
      <Fragment>
        <Header />
        <ModuleContainer />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
