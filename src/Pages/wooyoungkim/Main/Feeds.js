import React from "react";
import Header from "./Header";
import Article from "./Article";
import "./Main.scss";

class Feeds extends React.Component {
  render() {
    return (
      <div className="feeds">
        <Header />
        <Article />
      </div>
    );
  }
}

export default Feeds;
