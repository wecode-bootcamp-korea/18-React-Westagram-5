import React from "react";
import CommentList from "./CommentList";
import './Comment.scss';

class Comment extends React.Component {
  constructor(){
    super();
    this.state = {
      comment: '',
      commentList:[]
    }
  }

  componentDidMount(){
    fetch('/data/commentData.json')
    .then (res => res.json())
    .then (res => this.setState ({
      commentList: res
    }))
  }

  handleCommentInput = (e) => {
    this.setState({
      comment : e.target.value
    });
  }

  addComment = () => {
    this.setState({
      commentList: this.state.commentList.concat({userName: "songbetter", content: this.state.comment}),
      comment: ''
    });
  }

  pressEnter = (e) => {
    if(e.key === 'Enter'){
      this.addComment()
    }
  }

  render(){ 
    const { commentList, comment, userName } = this.state;
    const { pressEnter, addComment, handleCommentInput } = this;
    return (
      <section className="commentArea">
        <ul className="commentList">
        {commentList.map((listData) =>
        <CommentList id={listData.id} name={listData.userName} content={listData.content} isLiked={listData.isLiked} newName={userName}/>)}
        </ul>
        <span>1시간 전</span>
        <div className="comment">
          <img alt="emoji icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" height="24px" />
          <textarea onKeyPress={pressEnter} onChange={handleCommentInput} value={comment} placeholder="댓글 달기..." className="textArea" />
          <button onClick={addComment} className="commentBtn">게시</button>
        </div>
      </section>
    )
  }
};

export default Comment;