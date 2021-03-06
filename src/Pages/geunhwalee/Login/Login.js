
import React from 'react';
import {withRouter} from 'react-router-dom';
import './Login.scss';



class Loginlee extends React.Component {
	constructor() {
		super();
		this.state = {
			color: 'red',
		};
	}
	
    goToMain = () => {
        this.props.history.push('/main-geunhwalee');
    }

	handleIdInput = () => {
		console.log("HandelInput함수: 버튼 클릭")
	}

    render() {
        return(
            <div className="Login">
                <section className="background">
                    <form className="loginBox">
                        <h1>westagram</h1>
                        <input type="text" className ="username" placeholder="전화번호, 사용자 이름 또는 이메일" />
                        <input type="password" className="pswd" placeholder="비밀번호" />
                        <button className="loginBtn" onClick={this.goToMain}>로그인</button> 
                        <a href="https://www.instagram.com/accounts/password/reset/" id="pwdAsk">비밀번호를 잊으셨나요?</a>
                    </form>
                </section>
            </div>
        )
    }
}

//onClick={this.goToMain}

export default withRouter(Loginlee);