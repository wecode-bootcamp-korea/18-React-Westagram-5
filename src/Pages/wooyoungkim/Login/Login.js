import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Loginwoo extends Component {
  constructor() {
    super();
    this.state = {
      loginId: "",
      loginPw: "",
    };
  }

  handleIdPwInput = (el) => {
    const name = el.target.className;
    this.setState({ [name]: el.target.value }); //계산된 속성명
  };

  sign = () => {
    fetch("http://10.58.4.173:8000/account/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.loginId,
        password: this.state.loginPw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") {
          console.log("SUCCESS", res);
          this.props.history.push("/main-wooyoungkim");
        } else {
          console.log("You Are Wrong", res);
        }
      });
  };

  goToMain = () => {
    const { loginId, loginPw } = this.state;

    if (loginId.includes("@") && loginPw.length >= 5) {
      this.props.history.push("/main-wooyoungkim");
      // this.sign();
    }
  };

  render() {
    const { loginId, loginPw } = this.state;
    const { handleIdPwInput, goToMain } = this;

    return (
      <div className="Login">
        <div className="westagram">westagram</div>
        <div className="loginBorder">
          <input
            className="loginId"
            type="text"
            onChange={handleIdPwInput}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="loginPw"
            type="password"
            onChange={handleIdPwInput}
            placeholder="비밀번호"
          />
          <button
            className={
              loginId.includes("@") && loginPw.length >= 5
                ? "loginBtnAble"
                : "loginBtnUnable"
            }
            type="submit"
            onClick={goToMain}
          >
            로그인
          </button>
        </div>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    );
  }
}

export default withRouter(Loginwoo);
