import React from "react";
import Comment from "./Comment";
import "./Main.scss";
import westa from "../../../images/sangyeonkim/westa-feeds.png";
import { CgSmile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";

class MainFeeds extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: "",
    };
  }

  inputComment = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  pressEnter = (e) => {
    if (e.key === "Enter") {
      this.submitComment();
      e.preventDefault();
    }
  };

  submitComment = () => {
    this.setState({
      commentList: this.state.commentList.concat(this.state.commentValue),
      commentValue: "",
    });
  };

  render() {
    return (
      <>
        <article className="westaFeeds">
          <div className="westaImages">
            <img className="westaNike" src={westa} alt="나이키" />
            <div className="searchBottom">
              <div className="westaIconImages">
                <div className="westaIcons">
                  <AiOutlineHeart size="30" />
                  <BiPaperPlane size="30" />
                  <FaRegComment size="30" />
                </div>
                <div className="westaIcons2">
                  <div>
                    <FaRegBookmark size="30" />
                  </div>
                </div>
              </div>
              <div className="good">
                <p>좋아요 9개</p>
              </div>
              <div className="adidas">
                <p className="adidasName">adidas: </p> <p> This is SWAG</p>
              </div>
              <div className="minute">
                <p>20분전</p>
              </div>
              {this.state.commentList.map((comment, index) => {
                return <Comment key={index} value={comment} />;
              })}
            </div>
          </div>
          <form className="totalSearch">
            <div className="smile">
              <CgSmile size="30" />
            </div>
            <div className="searchSecond">
              <input
                className="string"
                type="text"
                placeholder="댓글 달기"
                onChange={this.inputComment}
                onKeyPress={this.pressEnter}
                value={this.state.commentValue}
              />
            </div>
            <div className="serachAdd">
              <button className="stringSecond" onClick={this.submitComment}>
                게시
              </button>
            </div>
          </form>
        </article>
      </>
    );
  }
}

export default MainFeeds;
