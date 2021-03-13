import React from "react";
import Feed from "./Feed/Feed";
import "./Feeds.scss";

class Feeds extends React.Component {
  constructor(){
    super();
    this.state ={
      feed: []
    }
  }

  componentDidMount(){
  fetch("/data/feedData.json")
    .then (res => res.json())
    .then (res => this.setState ({
      feed: res
    }))
  }

  render(){
    return (
      <div className="feeds">
        {this.state.feed.map((feedData) =>
        <Feed id={feedData.id} userId={feedData.userId} userName={feedData.userName} content={feedData.content} profileImg={feedData.profileImg} feedImg={feedData.feedImg} ale={feedData.alt}/>)}
      </div>
    )
  }
};

export default Feeds;