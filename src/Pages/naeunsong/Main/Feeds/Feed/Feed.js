import React from "react";
import Comment from "../Comment/Comment";
import "./Feed.scss";

class Feed extends React.Component {
  render(){
    const {id, profileImg, feedImg, userName, userId, alt} = this.props
    return(
    <article className="feed" key={id}>
      <section className="articleProfile">
        <img alt={`${userName} 프로필 이미지`} src={profileImg} />
        <div className="info">
          <strong>{userId}</strong>
          <span>{userName}</span>
        </div>
      </section>
      <section className="feedImg">
        <img alt={alt} src={feedImg}/>
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
          <strong>{userName}</strong> <span>{this.props.content}</span>
        </div>
      </section>
      <Comment/>
    </article>
    )
  }
};

export default Feed;