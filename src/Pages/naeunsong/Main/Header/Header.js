import React from "react";
import "./Header.scss";

class Header extends React.Component {
   render(){
    return (
    <header>
      <h1 className="logo">Westagram</h1>
      <div className="searchBar">
        <input type="text" placeholder="검색" className="search" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" height="20px" alt="search icon" />
      </div>
      <nav>
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore icon" /> 
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart icon" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="mypage icon" />
      </nav>
    </header>
    )
  }
};

export default Header;