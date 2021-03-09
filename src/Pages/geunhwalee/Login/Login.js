
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
                        <button className={(id.includes("@") && pw.length>4) ? "btnColorChange" : ".loginBtn"} onClick={this.goToMain}>로그인</button> 
                        <a href="https://www.instagram.com/accounts/password/reset/" id="pwdAsk">비밀번호를 잊으셨나요?</a>
                    </form>
                </section>
            </div> 
        )
    }
}


export default withRouter(Loginlee);