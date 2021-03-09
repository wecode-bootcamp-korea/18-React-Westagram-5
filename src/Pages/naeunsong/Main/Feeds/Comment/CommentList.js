import React from "react";
import './Comment.scss';

class CommentList extends React.Component {
  render(){
    const {commentList, name} = this.props
    return (
    <ul className="commentList">
      {commentList.map((comment =>
      <li>
        <a>{name}</a> {comment}
      </li>
      ))}        
    </ul>
    )
  }
};

export default CommentList;