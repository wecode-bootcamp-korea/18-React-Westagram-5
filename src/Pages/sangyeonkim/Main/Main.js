import React, { Component } from "react";
import "./Main.scss";
import { IoMdTabletPortrait } from "react-icons/io";
import { IoMdThumbsUp } from "react-icons/io";
import { CgSmile } from "react-icons/cg";
import westa from "./westa-feeds.png";
import right from "./westa-main-right.png";

class Mainkim extends Component {
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
    console.log(this.state.commentList);
    return (
      <>
        <nav className="nav-top">
          <div className="westa">
            <div className="first-icon">
              <img
                className="div-images"
                src="https://www.flaticon.com/kr/premium-icon/icons/svg/717/717392.svg"
                alt="첫번째 아이콘"
              />
            </div>
            <div className="westa-name">
              <p className="westa-title">Westagram</p>
            </div>
          </div>
          <input class="search" type="text" placeholder="검색" />
          <div className="images">
            <div className="second-icon">
              <IoMdTabletPortrait size="22" />
            </div>
            <div className="third-icon">
              <img
                className="div-images"
                src="https://www.flaticon.com/svg/vstatic/svg/1077/1077035.svg?token=exp=1614513296~hmac=bd3a95af4c48808d7069c05d6f2a922f"
                alt="세번째 아이콘"
              />
            </div>
            <div className="forth-icon">
              <IoMdThumbsUp size="22" />
            </div>
            <div className="fifth-icon">
              <img
                className="div-images"
                src="https://www.flaticon.com/premium-icon/icons/svg/3033/3033143.svg"
                alt="다섯번째 아이콘"
              />
            </div>
          </div>
        </nav>
        <main className="main">
          <div className="main-page">
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
                  <button
                    className="string-second"
                    onClick={this.submitComment}
                  >
                    게시
                  </button>
                </div>
              </div>
            </article>
            <div className="main-right">
              <img
                className="westa-main-right"
                src={right}
                alt="메인 오른쪽 창"
              />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Mainkim;
