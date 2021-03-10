
import React from 'react';
import {withRouter} from 'react-router-dom';
import './Login.scss';



class Loginlee extends React.Component {

	constructor() {
		super();
		this.state = {
			id: "",
			pw: ""
		};
	}

	
    goToMain = () => {
        this.props.history.push('/main-geunhwalee');
    }

	handleIdInput = (e) => {
		const {value} = e.target;
		this.setState ({
			id: value,
		});
	}

	handlePwInput = (e) => {
		const {value} = e.target;
		this.setState({
			pw: value,
		});
	}

	// "http://10.58.4.167:8000/users/signup" 수진님 api
	// "http://10.58.4.217:8000/user/signin" 인아님
	// http://10.58.4.128:8000/user/signin

	sendInfo = (e) => {
		e.preventDefault();
		fetch ("http://10.58.4.167:8000/users/signin", {
			method: 'POST',
			body: JSON.stringify({
				email: this.state.id,
				password: this.state.pw
			}),
		})
		.then ((response) => response.json())
		.then ((result) => console.log("결과", result))
	}
	


	render() {
		const {id} = this.state;
		const {pw} = this.state;
        return(
            <div className="Login">
                <section className="background">
                    <form className="loginBox">
                        <h1>westagram</h1>
                        <input type="email" className ="username" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={this.handleIdInput}  />
                        <input type="password" className="pwd" placeholder="비밀번호" onChange={this.handlePwInput} />
                        <button className={(id.includes("@") && pw.length>4) ? "btnColorChange" : ".loginBtn"} onClick={(e) => this.sendInfo(e)}>로그인</button> 
                        <a href="https://www.instagram.com/accounts/password/reset/" id="pwdAsk">비밀번호를 잊으셨나요?</a>
                    </form>
                </section>
            </div> 
        )
    }
}


export default withRouter(Loginlee);