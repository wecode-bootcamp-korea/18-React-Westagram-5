import React from "react";
import "./Main.scss";
import right from "./westa-main-right.png";

class MainRight extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="mainRight">
          <img className="westaMainRight" src={right} alt="메인 오른쪽 창" />
        </div>
      </>
    );
  }
}

export default MainRight;
