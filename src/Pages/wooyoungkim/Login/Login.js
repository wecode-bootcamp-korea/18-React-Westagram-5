import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';


class Loginwoo extends Component {   
	state = {  }
	render() { 
		return (
			<div class="Login">
            <div class='westagram'>westagram</div>
            <div class="login_border">
              <input class="login_txt" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
              <input class="login_pwd" type="password" placeholder="비밀번호" />
              <button class="login_btn" onclick="moveMain()" disabled><Link to="/Main">로그인</Link></button>
            </div>
            <a href="#">비밀번호를 잊으셨나요?</a>
          </div>
		);
	}
}
 
export default Loginwoo;