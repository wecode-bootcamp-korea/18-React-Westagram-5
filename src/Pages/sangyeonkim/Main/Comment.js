import React from "react";
import "./Main.scss";

class Comment extends React.Component {
  render() {
    return (
      <ul className="textBox">
        {this.props.commentList.map((el) => (
          <li>adidas:{el.text}</li>
        ))}
      </ul>
    );
  }
}

export default Comment;
