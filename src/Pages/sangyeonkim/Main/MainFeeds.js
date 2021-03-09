import React from "react";
import "./Main.scss";
import westa from "./westa-feeds.png";
import { CgSmile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";

class MainFeeds extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      commentList: [{ text: "" }],
    };
  }

  inputComment = (e) => {
    this.setState({ value: e.target.value });
  };

  pressEnter = (e) => {
    if (e.key === "Enter") {
      this.submitComment();
    }
  };

  submitComment = () => {
    const comment = {
      text: this.state.value,
    };
    this.setState({
      commentList: this.state.commentList.concat(comment),
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
              <ul className="textBox">
                {this.state.commentList.map((el) => (
                  <li>adidas:{el.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="totalSearch">
            <div className="smile">
              <CgSmile size="30" />
            </div>
            <div className="searchSecond">
              <input
                className="string"
                type="text"
                placeholder="댓글 달기"
                onChange={this.inputComment}
                onKeyDown={this.pressEnter}
              />
            </div>
            <div className="serachAdd">
              <button className="stringSecond" onClick={this.submitComment}>
                게시
              </button>
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default MainFeeds;
