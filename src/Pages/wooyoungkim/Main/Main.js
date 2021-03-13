import React from "react";
import Nav from "./Nav";
import Feeds from "./Feeds";
import Sidebar from "./Sidebar";
import "./Main.scss";

class Mainwoo extends React.Component {
  render() {
    return (
      <div className="layout">
        <Nav />
        <main>
          <Feeds />
          <Sidebar />
        </main>
      </div>
    );
  }
}

export default Mainwoo;
