import React from "react";
import "./Main.scss";
import { IoMdTabletPortrait } from "react-icons/io";
import { IoMdThumbsUp } from "react-icons/io";

class NavTop extends React.Component {
  state = {};
  render() {
    return (
      <>
        <nav className="nav-top">
          <div className="westa">
            <div className="first-icon">
              <img
                className="div-images"
                src="https://www.flaticon.com/kr/premium-icon/icons/svg/717/717392.svg"
                alt="첫번째 아이콘"
              />
            </div>
            <div className="westa-name">
              <p className="westa-title">Westagram</p>
            </div>
          </div>
          <input class="search" type="text" placeholder="검색" />
          <div className="images">
            <div className="second-icon">
              <IoMdTabletPortrait size="22" />
            </div>
            <div className="third-icon">
              <img
                className="div-images"
                src="https://www.flaticon.com/svg/vstatic/svg/1077/1077035.svg?token=exp=1614513296~hmac=bd3a95af4c48808d7069c05d6f2a922f"
                alt="세번째 아이콘"
              />
            </div>
            <div className="forth-icon">
              <IoMdThumbsUp size="22" />
            </div>
            <div className="fifth-icon">
              <img
                className="div-images"
                src="https://www.flaticon.com/premium-icon/icons/svg/3033/3033143.svg"
                alt="다섯번째 아이콘"
              />
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavTop;
