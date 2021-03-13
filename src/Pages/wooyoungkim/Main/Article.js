import React from "react";
import Comment from "./Comment";
import "./Main.scss";

class Article extends React.Component {
  render() {
    return (
      <article>
        <section className="section_id">
          <span>
            <img
              className="section_id_logo"
              src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Italiano"
            />
            <a className="section_id_link" href="#">
              wooyoung
            </a>
          </span>
          <a href="#">
            <img
              className="section_id_more"
              src="https://www.flaticon.com/svg/vstatic/svg/512/512142.svg?token=exp=1614846159~hmac=c15d7fc42e3a8f2f46e1d8f6bd09ac9b"
              alt="more"
            />
          </a>
        </section>

        <section className="section_img">
          <img
            className="section_img_png"
            src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="Italiano"
          />
        </section>

        <section className="section_icon">
          <span>
            <a href="#">
              <img
                className="section_icon_img"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="heart"
              />
            </a>
            <a href="#">
              <img
                className="section_icon_img"
                src="https://www.flaticon.com/svg/vstatic/svg/589/589671.svg?token=exp=1614846451~hmac=aef137b872205caa2935b70914364e18"
                alt="chat"
              />
            </a>
            <a href="#">
              <img
                className="section_icon_img"
                src="https://www.flaticon.com/svg/vstatic/svg/3892/3892905.svg?token=exp=1615569377~hmac=df961e24c1097b6f56d2ab1cb4ca1b6c"
                alt="navigation"
              />
            </a>
          </span>
          <a href="#">
            <img
              className="section_icon_img"
              src="https://www.flaticon.com/svg/vstatic/svg/84/84510.svg?token=exp=1614846513~hmac=b145be3d43395a076cb67ad3169a58e3"
              alt="bookmark"
            />
          </a>
        </section>

        <a className="section_like" href="#">
          좋아요 552개
        </a>
        <Comment />
      </article>
    );
  }
}
export default Article;
