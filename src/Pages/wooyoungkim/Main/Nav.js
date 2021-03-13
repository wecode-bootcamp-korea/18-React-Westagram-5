import React from "react";
import "./Main.scss";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav_screen">
          <div className="nav_title">westagram</div>
          <input className="nav_text" type="text" placeholder="&#xf002; 검색" />
          <span className="nav_imgbox">
            <img
              className="nav_img"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="search"
            />
            <img
              className="nav_img"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart"
            />
            <img
              className="nav_img"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="mypage"
            />
          </span>
        </div>
      </nav>
    );
  }
}

export default Nav;
