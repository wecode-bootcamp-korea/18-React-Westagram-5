import React from "react";
import CommentForm from "./CommentForm";
import "./Main.scss";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      newReply: "",
      replies: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          replies: data,
        });
      });
  };

  textChange = (el) => {
    this.setState({ newReply: el.target.value });
  };

  buttonClick = () => {
    const { replies, newReply } = this.state;

    let arr = replies;
    arr = arr.concat({
      name: "whoyoung90",
      comment: newReply,
    });

    this.setState({
      newReply: "",
      replies: arr,
    });
  };

  enterClick = (el) => {
    if (el.key === "Enter" && this.state.newReply) {
      // (&& this.state.newReply) 빈댓글을 처음 한번밖에 안막아줌..수정필요
      this.buttonClick();
    }
  };

  render() {
    const { replies, newReply } = this.state;
    const { textChange, enterClick, buttonClick } = this;

    return (
      <>
        <section className="section_hashtag">
          <a className="section_hashtag_id" href="#">
            wooyoung
          </a>
          &nbsp; Lamborghini Huracan Performante
          <br />
          <a href="#" className="hashtagLink">
            #람보르기니
          </a>
          &nbsp;
          <a href="#" className="hashtagLink">
            #그저 빛
          </a>
          <div className="textbox">
            <CommentForm repliesList={replies} />
          </div>
        </section>
        <a className="time_before" href="#">
          <time datetime="#">4시간 전</time>
        </a>

        <div className="section_comment">
          <button className="comment_emoticon">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/152/152515.svg?token=exp=1614846551~hmac=041be83f817bc2f192a9f39022b149de"
              alt="smile"
            />
          </button>
          <textarea
            className="comment_textarea"
            placeholder="댓글 달기..."
            value={newReply}
            onChange={textChange}
            onKeyPress={enterClick}
          ></textarea>
          <button className="comment_button" onClick={buttonClick}>
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
