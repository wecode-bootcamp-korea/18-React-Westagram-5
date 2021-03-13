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
    /*fetch('http://10.58.3.143:8000/posting/upload',{
      method:"POST",
      headers: {
        'Authorization': localStorage.getItem('wtw.token')
           },
      body: JSON.stringify({
        image : '',
        content :''
    })
  })*/
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