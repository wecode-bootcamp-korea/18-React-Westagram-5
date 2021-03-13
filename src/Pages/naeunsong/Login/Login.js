import React from "react";
import {withRouter} from 'react-router-dom';
import "./Login.scss"; 
import "../../../Styles/common.scss";

class Loginsong extends React.Component {
  constructor(){
    super();
    this.state ={
      userId: '',
      userPassword: ''
    }
  }

  goToMain = (e) => {
    e.preventDefault();
    this.props.history.push('/main-naeunsong')
    /*
    fetch("http://10.58.3.143:8000/user/signin",{
      method:"POST",
      body: JSON.stringify({
        email: this.state.userId,
        password: this.state.userPassword
      })
    })
    .then(res => res.json())
    .then(result => result.message === "SUCCESS" ? 
    this.props.history.push('/main-naeunsong') && result.token && localStorage.setItem('wtw-token',result.token)
    : alert("아이디와 비밀번호를 확인해주세요"))*/
  }
 
  handleIdInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(){
    const { userId, userPassword } = this.state;
    const { handleIdInput, goToMain} = this;
    return (
    <div class="borderBox">
      <section className="login">
        <h1 className="logo">westagram</h1>
        <form>
          <input onChange={handleIdInput} value={userId} name="userId" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
          <input onChange={handleIdInput} value={userPassword} name="userPassword" type="password" placeholder="비밀번호" />
          <button onClick={goToMain} className={userId.includes('@') && (userPassword.length >= 5) ? 'activeBtn' : 'inactiveBtn'}>로그인</button>
        </form>
        <a href="https://www.instagram.com/accounts/password/reset/" className="checkPassword">비밀번호를 잊으셨나요?</a>
      </section>
    </div>
    )
  }
};

export default withRouter(Loginsong);
