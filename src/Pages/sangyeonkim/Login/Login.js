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

  goToMain = () => {
    if (this.state.id.includes("@") && this.state.pw.length > 4)
      this.props.history.push("./Main");
  };

  handleIdInput = (event) => {
    this.setState({ id: event.target.value });
  };

  handlePwInput = (event) => {
    this.setState({ pw: event.target.value });
  };

  render() {
    const { id, pw } = this.state;
    return (
      <>
        <section className="container">
          <section className="structure">
            <div className="instagram">
              <p className="westaTitle">Westagrams</p>
            </div>
            <div className="login-page">
              <div>
                <input
                  type="text"
                  className="id"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={this.handleIdInput}
                />
              </div>
              <div>
                <input
                  type="password"
                  className="pw"
                  placeholder="비밀번호"
                  onChange={this.handlePwInput}
                />
              </div>
              <div className="login">
                <button
                  className={
                    id.includes("@") && pw.length > 4
                      ? "login-btn-active"
                      : "login-btn"
                  }
                  onClick={this.goToMain}
                >
                  로그인
                </button>
              </div>
            </div>
            <div className="or">
              <div className="or-left"></div>
              <div className="or-center">
                <p className="or-text">또는</p>
              </div>
              <div className="or-right"></div>
            </div>
            <div className="facebook">
              <div className="facebook-image">
                <FaFacebookSquare color="blue" />
              </div>
              <div className="facebook-login">
                <p>Facebook으로 로그인</p>
              </div>
            </div>
            <div className="forget">
              <p>비밀번호를 잊으셨나요?</p>
            </div>
          </section>
          <aside className="side">
            <div className="side-account">
              <p>계정이 없으신가요?</p>
            </div>
            <div className="side-in">
              <a href="https://ko-kr.facebook.com/">가입하기</a>
            </div>
          </aside>
          <footer className="foot">
            <p className="download">앱을 다운로드하세요.</p>
          </footer>
        </section>
      </>
    );
  }
}

export default Loginkim;
