import React from "react";

class Comment extends React.Component {
  render() {
    return (
      <ul className="textBox">
        <li>adidas:{this.props.value}</li>
      </ul>
    );
  }
}

export default Comment;
