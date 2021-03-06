import React from "react";
import "./Login.scss"; 
import "../../../Styles/common.scss";
import {withRouter} from 'react-router-dom';

class Loginsong extends React.Component {
  goToMain = () => {
    this.props.history.push('/main-naeunsong');
  } 

  render(){
    return (
    <section className="login">
      <h1 className="logo">westagram</h1>
      <form>
        <input name="userId" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input name="userPassword" type="password" placeholder="비밀번호" />
        <button onClick={this.goToMain}>로그인</button>
      </form>
      <a href="https://www.instagram.com/accounts/password/reset/" className="checkPassword">비밀번호를 잊으셨나요?</a>
    </section>
    )
  }
};

export default withRouter(Loginsong);
