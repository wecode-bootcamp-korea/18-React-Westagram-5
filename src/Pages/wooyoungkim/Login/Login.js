import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';


class Loginwoo extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  handleIdInput = (event) => {
    this.setState({ id: event.target.value });
  }

  handlePwInput = (event) => {
    this.setState({ pw: event.target.value });
  }

  goToMain = () => {
    const {id, pw} = this.state;
    
    if( id.includes("@") && pw.length>=5 ){
      this.props.history.push("/main-wooyoungkim");
    }
  }
  
	render() {
    const { id, pw } = this.state;

		return (
			<div className="Login">
        <div className='westagram'>westagram</div>
        <div className="login_border">
          <input className="login_txt" type="text" onChange={this.handleIdInput} placeholder="전화번호, 사용자 이름 또는 이메일" />
          <input className="login_pwd" type="password" onChange={this.handlePwInput} placeholder="비밀번호" />
          <button className={ id.includes("@") && pw.length>=5  ? "loginBtnAble" : "loginBtnUnable"} 
                  type="submit" 
                  onClick={this.goToMain}>로그인</button>
        </div>
          <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
		);
	}
}
 
export default withRouter(Loginwoo);