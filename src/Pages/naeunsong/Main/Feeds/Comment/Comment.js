import React from "react";
import './Comment.scss';
import CommentList from "./CommentList";

class Comment extends React.Component {
  constructor(){
    super();
    this.state = {
      id:0,
      name: 'songbetter',
      comment: '',
      commentList:[]
    }
  }

  handleCommentInput = (e) => {
    this.setState({
      comment : e.target.value
    });
  }

  addComment = () => {
    this.setState({
      commentList: this.state.commentList.concat(this.state.comment),
      comment: ''
    });
  }

  pressEnter = (e) => {
    if(e.key === 'Enter'){
      this.addComment()
    }
  }

  render(){ 
    const { name, commentList, comment} = this.state;
    const {pressEnter, addComment, handleCommentInput} = this;
    return (
      <section className="commentArea">
        <CommentList name={name} commentList={commentList}/>
        <span>1시간 전</span>
        <div className="comment">
          <img alt="emoji icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" height="24px" />
          <textarea onKeyPress={pressEnter} onChange={handleCommentInput} value={comment} placeholder="댓글 달기..." className="textArea"></textarea>
          <button onClick={addComment} className="commentBtn">게시</button>
        </div>
      </section>
    )
  }
};

export default Comment;