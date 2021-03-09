import React, { Component } from "react";
import NavTop from "./NavTop";
import MainRight from "./MainRight";
import MainFeeds from "./MainFeeds";
import "./Main.scss";

class Mainkim extends Component {
  render() {
    return (
      <>
        <NavTop />
        <main className="main">
          <div className="mainPage">
            <MainFeeds />
            <MainRight />
          </div>
        </main>
      </>
    );
  }
}

export default Mainkim;
