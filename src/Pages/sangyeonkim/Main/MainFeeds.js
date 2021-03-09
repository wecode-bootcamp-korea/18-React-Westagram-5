import React from "react";
import "./Main.scss";
import { CgSmile } from "react-icons/cg";
import westa from "./westa-feeds.png";

class MainFeeds extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      commentList: [{ text: "" }],
    };
  }

  inputComment = (event) => {
    this.setState({ value: event.target.value });
  };

  pressEnter = (event) => {
    if (event.key === "Enter") {
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
        <article className="westa-feeds">
          <div className="westa-images">
            <img className="westa-nike" src={westa} alt="나이키" />
            <div className="search-bottom">
              <div className="westa-icon-images">
                <div className="westaIcons">
                  <i class="far fa-heart fa-2x" />
                  <i class="far fa-paper-plane fa-2x" />
                  <i class="far fa-comment fa-2x" />
                </div>
                <div className="westaIcons2">
                  <div>
                    <i class="far fa-bookmark fa-2x" />
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
          <div className="total-search">
            <div className="smile">
              <CgSmile size="30" />
            </div>
            <div className="search-second">
              <input
                className="string"
                type="text"
                placeholder="댓글 달기"
                onChange={this.inputComment}
                onKeyDown={this.pressEnter}
              />
            </div>
            <div className="serach-add">
              <button className="string-second" onClick={this.submitComment}>
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
