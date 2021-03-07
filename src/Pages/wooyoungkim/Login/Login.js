import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';


class Loginwoo extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      pw: "" 
    };
  }

  handleIdInput = (event) => {
    this.setState({ id: event.target.value });
  }

  handlePwInput = (event) => {
    this.setState({ pw : event.target.value });
  }

	render() { 
		return (
			<div className="Login">
            <div className='westagram'>westagram</div>
            <div className="login_border">
              <input className="login_txt" type="text" onChange={this.handleIdInput} placeholder="전화번호, 사용자 이름 또는 이메일" />
              <input className="login_pwd" type="password" onChange={this.handlePwInput} placeholder="비밀번호" />
              <button className="login_btn" onClick="moveMain()" disabled><Link to="/main-wooyoungkim">로그인</Link></button>
            </div>
            <a href="#">비밀번호를 잊으셨나요?</a>
          </div>
		);
	}
}
 
export default Loginwoo;