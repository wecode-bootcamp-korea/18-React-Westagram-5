import React from "react";
import Recommend from "./RecommendInfo/Recommend";
import "./MainRight.scss";

class MainRight extends React.Component {
  render(){
    return (
    <aside className="mainRight">
      <section className="mainRightProfile">
        <img alt="sonbetter 프로필 이미지" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/120448479_975679696266669_3341802946101100591_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=3Y26-0VV8lUAX-Q-nEI&tp=1&oh=465a7e09af8e32eecf62d726ffa9ecdd&oe=605C9F0B" />
        <div className="info">
          <strong>songbetter</strong>
          <span>송나은</span>
        </div>
        <div className="changeUser">
          <strong>전환</strong>
        </div>
      </section>
      <Recommend/>
    </aside>
    )
  }
};

export default MainRight;