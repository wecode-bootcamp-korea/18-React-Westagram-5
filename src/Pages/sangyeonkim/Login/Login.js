import React, { Component } from "react";
import "./Login.scss";
import { FaFacebookSquare } from "react-icons/fa";

class Loginkim extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  goToMain = (e) => {
    e.preventDefault();
    if (this.state.id.includes("@") && this.state.pw.length > 4) {
      fetch("http://10.58.4.128:8000/user/signin", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.id,
          password: this.state.pw,
        }),
      })
        .then((response) => response.json())
        .then((result) => console.log("결과: ", result));
      this.props.history.push("./Main-sangyeonkim");
    }
  };

  handleInputValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(e.target.value);
  };

  render() {
    const { id, pw } = this.state;
    return (
      <section className="container">
        <section className="structure">
          <div className="instagram">
            <p className="westaTitle">Westagrams</p>
          </div>
          <div className="loginPage">
            <div>
              <input
                type="text"
                className="id"
                name="id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleInputValue}
              />
            </div>
            <div>
              <input
                type="password"
                className="pw"
                name="pw"
                placeholder="비밀번호"
                onChange={this.handleInputValue}
              />
            </div>
            <div className="login">
              <button
                className={
                  id.includes("@") && pw.length > 4
                    ? "loginBtnActive"
                    : "loginBtn"
                }
                onClick={this.goToMain}
              >
                로그인
              </button>
            </div>
          </div>
          <div className="or">
            <div className="orLeft" />
            <div className="orCenter">
              <p className="orText">또는</p>
            </div>
            <div className="orRight" />
          </div>
          <div className="facebook">
            <div className="facebookImage">
              <FaFacebookSquare color="blue" />
            </div>
            <div className="facebookLogin">
              <p>Facebook으로 로그인</p>
            </div>
          </div>
          <div className="forget">
            <p>비밀번호를 잊으셨나요?</p>
          </div>
        </section>
        <aside className="side">
          <div className="sideAccount">
            <p>계정이 없으신가요?</p>
          </div>
          <div className="sideIn">
            <a href="https://ko-kr.facebook.com/">가입하기</a>
          </div>
        </aside>
        <footer className="foot">
          <p className="download">앱을 다운로드하세요.</p>
        </footer>
      </section>
    );
  }
}

export default Loginkim;
