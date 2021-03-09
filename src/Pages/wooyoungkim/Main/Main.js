import React, { Component } from 'react';
import Comment from './Comment';
import './Main.scss';


class Mainwoo extends Component {

    render() { 
		return (
			<div className="Main">
            <nav>
                <div className="nav_screen">
                    <div className="nav_title">westagram</div>
                    <input className="nav_text" type="text" placeholder="&#xf002; 검색" />
                    <span className="nav_imgbox">
                         <img className="nav_img" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="search" />
                         <img className="nav_img" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
                         <img className="nav_img" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="mypage" />
                    </span>
                </div>
            </nav>
            <main>
                <div className="feeds">
                    <header className="header_box">
                        <li>
                           <img className="header_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                           <div className="header_text">wine</div>
                        </li>
                        <li>
                             <img className="header_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                            <div className="header_text">wine</div>
                        </li>
                        <li><img className="header_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                            <div className="header_text">wine</div>
                        </li>
                        <li><img className="header_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                            <div className="header_text">wine</div>
                        </li>
                        <li><img className="header_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                            <div className="header_text">wine</div>
                        </li>
                        <li>
                            <img className="header_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                            <div className="header_text">wine</div>
                        </li>
                        <li>
                            <img className="header_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                            <div className="header_text">wine</div>
                        </li>
                        <li>
                            <img className="header_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                            <div className="header_text">wine</div>
                        </li>
                        <li>
                            <img className="header_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                            <div className="header_text">wine</div>
                        </li>
                        <li>
                            <img className="header_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                            <div className="header_text">wine</div>
                        </li>
                    </header>
                    <article>
                        <section className="section_id">
                            <li><img className="section_id_logo" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                                <a className="section_id_link" href="#">wooyoung</a>
                            </li>
                            <li><a href="#"><img className="section_id_more" src="https://www.flaticon.com/svg/vstatic/svg/512/512142.svg?token=exp=1614846159~hmac=c15d7fc42e3a8f2f46e1d8f6bd09ac9b" alt="more" /></a></li>
                        </section>
    
                        <section className="section_img">
                            <img className="section_img_png" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                        </section>
    
                        <section className="section_icon">
                            <li><a href="#"><img className="section_icon_img" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" /></a>
                                <a href="#"><img className="section_icon_img" src="https://www.flaticon.com/svg/vstatic/svg/589/589671.svg?token=exp=1614846451~hmac=aef137b872205caa2935b70914364e18" alt="chat" /></a>
                                <a href="#"><img className="section_icon_img" src="https://www.flaticon.com/svg/vstatic/svg/3892/3892905.svg?token=exp=1614846489~hmac=7b7f7a9208fd0e60f504cde0137041d1" alt="navigation" /></a>
                            </li>
                            <li><a href="#"><img className="section_icon_img" src="https://www.flaticon.com/svg/vstatic/svg/84/84510.svg?token=exp=1614846513~hmac=b145be3d43395a076cb67ad3169a58e3" alt="bookmark" /></a></li>
                        </section>
    
                        <a className="section_like" href="#">좋아요 552개</a>
                        <section className="section_hashtag">
                            <a className="section_hashtag_id" href="#">wooyoung</a>
                                "화이트 와인? 레드 와인?""
                            <br />
                            <a href="#">#wine</a>                          
                            <a href="#">#와인</a>
                            <div className="comment_input">111</div>
                        </section>
                        <a className="time_before" href="#"><time datetime="#">4시간 전</time></a>                    
                        <Comment />
                    </article>
                </div>
                <sidebar className="main-right">
                    <aside className="right_me">
                        <li>
                            <img className="right_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                            <a className="right_id_link" href="#">wooyoung</a>
                            <div className="right_name">김우영</div>
                        </li>
                        <li><button>게시</button></li>
                    </aside>
                    <aside className="right_other">
                        <div className="others_pick">
                            <div>회원님을 위한 추천</div>
                            <a href="#">모두보기</a>                   
                        </div>
                        <div className="others">
                            <li>
                                <img className="others_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                                <a className="others_id_link" href="#">wooyoung</a>
                                <div className="others_name">김우영</div>
                            </li>
                            <li><button>게시</button></li>    
                        </div>
                        <div className="others">
                            <li>
                                <img className="others_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                                <a className="others_id_link" href="#">wooyoung</a>
                                <div className="others_name">김우영</div>
                            </li>
                            <li><button>게시</button></li>    
                        </div>
                        <div className="others">
                            <li>
                                <img className="others_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                                <a className="others_id_link" href="#">wooyoung</a>
                                <div className="others_name">김우영</div>
                            </li>
                            <li><button>게시</button></li>
                        </div>
                        <div className="others">
                            <li>
                                <img className="others_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                                <a className="others_id_link" href="#">wooyoung</a>
                                <div className="others_name">김우영</div>
                            </li>
                            <li><button>게시</button></li>    
                        </div>
                        <div className="others">
                            <li>
                                <img className="others_img" src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="wine" />
                                <a className="others_id_link" href="#">wooyoung</a>
                                <div className="others_name">김우영</div>
                            </li>
                            <li><button>게시</button></li>    
                        </div>
                    </aside>
                </sidebar>
            </main>
        </div>
		);
	}
}
 
export default Mainwoo;