import React from "react";
import './Comment.scss';

class CommentList extends React.Component {
  render(){
    return (
    <ul className="commentList">
      {this.props.commentList.map((comment =>
      <li>
        <a>{this.props.name}</a> {comment}
      </li>
      ))}        
    </ul>
    )
  }
};

export default CommentList;