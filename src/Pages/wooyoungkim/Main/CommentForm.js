import React from "react";
import "./CommentForm.scss";

class CommentForm extends React.Component {
  render() {
    const { name, comment } = this.props;

    return (
      <li>
        <a className="commentId" href="#">
          {name}
        </a>
        &nbsp;
        <span>{comment}</span>
      </li>
    );
  }
}
export default CommentForm;
