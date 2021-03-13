import React from "react";
import RecommendInfo from"./RecommendInfo";
import "./Recommend.scss";

class Recommend extends React.Component {
  constructor(){
    super();
    this.state = {
      recommendList:[]
    }
  }

  componentDidMount(){
    fetch('/data/recommendData.json')
    .then (res => res.json())
    .then (res => this.setState ({
      recommendList: res
    }))
  }

  render(){
    console.log(this.state.recommendList)
    return (
      <section className="recommend">
        <div className="recommendText">
          <span>회원님을 위한 추천</span>
        </div>
        {this.state.recommendList.map(list=>
        <RecommendInfo id={list.id} userId={list.userId} img_url={list.img_url} userName={list.userName}/>
        )}
      </section>
    )
  }
};

export default Recommend;
   