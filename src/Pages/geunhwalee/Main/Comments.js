import React from 'react';
import './Main.scss'

class Comments extends React.Component {
  
  render() {
    return (
      <div className="Comments">
        {this.props.newComments.commentList.map((element) => {
            return (
              <li>
                <p className="commentUser">{element.id}</p>
                <span className="commentDesc">{element.comment}</span>
              </li>
            )
          })}
      </div>
    )
  }
}

export default Comments;