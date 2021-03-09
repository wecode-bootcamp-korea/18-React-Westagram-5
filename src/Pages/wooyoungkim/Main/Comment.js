import React from 'react';
import './Main.scss';


class Comment extends React.Component{
    constructor() {
        super();
        this.state = { newReply: "", replies: [{ text: "" }] };
    }

    render(){
        return(
            <form className="section_comment">
                <button className="comment_emoticon"><img src="https://www.flaticon.com/svg/vstatic/svg/152/152515.svg?token=exp=1614846551~hmac=041be83f817bc2f192a9f39022b149de" alt="smile" /></button>
                <textarea className="comment_textarea" placeholder="댓글 달기..."></textarea>
                <button className="comment_button" type="submit" >게시</button>
            </form>
            )           
    }
}

export default Comment;