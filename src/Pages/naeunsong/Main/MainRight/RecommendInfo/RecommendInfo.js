import React from "react";
import "./RecommendInfo.scss";

class RecommendInfo extends React.Component {
  render(){
    const { id, userId, img_url, userName} = this.props
    return (
    <div className="recommendInfo" key={id}>
      <img alt={`${userId} 프로필 이미지`} src={img_url} />
      <div className="info">
        <strong>{userId}</strong>
        <span>{userName}</span>
      </div>
      <div className="follow"><a>팔로우</a></div>
    </div>
    )
  }
};

export default RecommendInfo;
   