import React from "react";
import "./Login.scss"; 
import "../../../Styles/common.scss";
import {withRouter} from 'react-router-dom';

class Loginsong extends React.Component {
  goToMain = () => {
    this.props.history.push('/main-naeunsong');
  } 

  constructor(){
    super();
    this.state ={
      userId: '',
      userPassword: ''
    }
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
    <section className="login">
      <h1 className="logo">westagram</h1>
      <form>
        <input onChange={handleIdInput} value={userId} name="userId" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input onChange={handleIdInput} value={userPassword} name="userPassword" type="password" placeholder="비밀번호" />
        <button onClick={goToMain} className={userId.includes('@') && (userPassword.length >= 5) ? 'activeBtn' : 'inactiveBtn'}>로그인</button>
      </form>
      <a href="https://www.instagram.com/accounts/password/reset/" className="checkPassword">비밀번호를 잊으셨나요?</a>
    </section>
    )
  }
};

export default withRouter(Loginsong);
