import React from "react";
import './Comment.scss';

class CommentList extends React.Component {
  render(){
    const {id, name, content, isLiked} = this.props
    return (
      <li key={id}>
        <strong>{name}</strong> {content} 
        <span className="heart">{isLiked?'🤍':'💔'}</span> <span className="delete">✖</span>
      </li>
    )
  }
};

export default CommentList;