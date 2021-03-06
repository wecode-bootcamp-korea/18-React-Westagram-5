import React from "react";
import "./MainRight.scss";

class MainRight extends React.Component {
  render(){
    return (
    <aside className="mainRight">
        <section className="mainRightProfile">
          <img alt="sonbetter 프로필 이미지" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/120448479_975679696266669_3341802946101100591_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=3Y26-0VV8lUAX-Q-nEI&tp=1&oh=465a7e09af8e32eecf62d726ffa9ecdd&oe=605C9F0B" />
          <div className="info">
            <a>songbetter</a>
            <span>송나은</span>
          </div>
          <div className="changeUser">
            <a>전환</a>
          </div>
        </section>
        <section className="recommend">
          <div className="recommendText">
            <span>회원님을 위한 추천</span>
          </div>
          <div className="recommendInfo1">
            <img alt="sonbetter 프로필 이미지" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/120448479_975679696266669_3341802946101100591_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=3Y26-0VV8lUAX-Q-nEI&tp=1&oh=465a7e09af8e32eecf62d726ffa9ecdd&oe=605C9F0B" />
            <div className="info">
              <a>songbetter</a>
              <span>송나은</span>
            </div>
            <div className="follow"><a>팔로우</a></div>
          </div>
          <div className="recommendInfo2">
            <img alt="wecode 프로필 이미지" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=G1pc0slT5dYAX-0PnDa&tp=1&oh=a7a51c4739ea8b87566b329ecdc33b43&oe=605C5770" />
            <div className="info">
              <a>wecode_bootcamp</a>
              <span>WeCode - 위코드</span>
            </div>
            <div className="follow"><a>팔로우</a></div>
          </div>
        </section>
      </aside>
    )
  }
};

export default MainRight;