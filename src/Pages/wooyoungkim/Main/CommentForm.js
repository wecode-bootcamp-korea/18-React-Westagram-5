import React from "react";
import "./CommentForm.scss";

class CommentForm extends React.Component {
  render() {
    const { repliesList } = this.props;

    return (
      <div>
        {repliesList.map((el) => (
          <li>
            <a className="commentId" href="#">
              {el.name}
            </a>
            &nbsp;
            <span>{el.comment}</span>
          </li>
        ))}
      </div>
    );
  }
}
export default CommentForm;
