import React from 'react';
import './Main.scss';


class Comment extends React.Component{
    constructor() {
        super();
        this.state = {
            newReply: "",  
            replies: [{ text: "" }] 
        };
       }
    

    textChange = (e) =>{
        this.setState({ newReply: e.target.value });
    }

    buttonClick = () =>{
        let arr = this.state.replies;
        arr.push({ text: this.state.newReply })

        this.setState({
            newReply: "",
            replies: arr 
        })
    }

    enterClick = (e) =>{
        if(e.key === 'Enter' && this.state.newReply){
            this.buttonClick();
            e.target.value = "";    
        }
    }

    render(){
        return(
            <>
            <section className="section_hashtag">
                <a className="section_hashtag_id" href="#">wooyoung</a>
                "화이트 와인? 레드 와인?""
                <br />
                <a href="#">#wine</a>                        
                <a href="#">#와인</a>
                <div className="textbox">
                { this.state.replies.map((e) =>(<li>{e.text}</li>)) }
                </div>
            </section>
            <a className="time_before" href="#"><time datetime="#">4시간 전</time></a> 

            <div className="section_comment">
                <button className="comment_emoticon"><img src="https://www.flaticon.com/svg/vstatic/svg/152/152515.svg?token=exp=1614846551~hmac=041be83f817bc2f192a9f39022b149de" alt="smile" /></button>
                <textarea 
                    className="comment_textarea" 
                    placeholder="댓글 달기..."
                    onChange={this.textChange}
                    onKeyPress={this.enterClick}
                    value={this.state.newReply}>
                </textarea>
                <button className="comment_button" onClick={this.buttonClick}>게시</button>
            </div>
            </>
            )           
    }
}

export default Comment;