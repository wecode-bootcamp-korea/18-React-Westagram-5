import React from "react";
import "./Feeds.scss";

class Feeds extends React.Component {
  render(){
    return (
      <article className="feeds">
        <article className="feed">
          <section className="articleProfile">
            <img alt="wecode 프로필 이미지" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=G1pc0slT5dYAX-0PnDa&tp=1&oh=a7a51c4739ea8b87566b329ecdc33b43&oe=605C5770" />
            <div className="info">
              <a>wecode_bootcamp</a>
              <span>WeCode - 위코드</span>
            </div>
          </section>
          <section className="feedImg">
            <img alt="위코드 부트캠프 실내 이미지 안에 SOLDOUT이라고 쓰여있다." src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/150915321_179560660629368_165943275422580666_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=uCmsp3r2d7MAX930Q5z&tp=1&oh=40938acaff43a67bb9a8187dccb1abc0&oe=605FCAA5" />
          </section>
          <section className="likeShare">
            <img alt="heart icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" width="24px" />
            <img alt="heart icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" width="24px" />  
              <img alt="heart icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" width="24px" /> 
              <img alt="heart icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" width="24px" />
              <h4>좋아요 100개</h4>
          </section>
          <section className="feedInfo">
            <div className="feedInfo1">
              <a>wecode_bootcamp</a> <span>위코드는 단순 교육업체가 아닌 개발자 커뮤니티 입니다. wecode에서 배우고 저는 총 5개 회사에서 오퍼를 받았습니다.</span>
            </div>
          </section>
          <section className="commentArea">
            <ul className="commentList">
              <li>
                <a>songbetter</a>
                <span>저도 가고 싶어요!</span>
              </li>
              <li>
                <a>songbetter</a>
                <span>저도 가고 싶어요!</span>
              </li>
            </ul>
            <span>1시간 전</span>
            <div className="comment">
              <img alt="emoji icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" height="24px" />
              <textarea placeholder="댓글 달기..." className="textArea"></textarea>
              <button className="commentBtn">게시</button>
            </div>
          </section>
        </article>
      </article>
    )
  }
};

export default Feeds;