import React from "react";
import "./Main.scss";

class Sidebar extends React.Component {
  render() {
    return (
      <sidebar className="main-right">
        <aside className="right_me">
          <li>
            <img
              className="right_img"
              src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Italiano"
            />
            <a className="right_id_link" href="#">
              wooyoung
            </a>
            <div className="right_name">김우영</div>
          </li>
          <li>
            <button>게시</button>
          </li>
        </aside>
        <aside className="right_other">
          <div className="others_pick">
            <div>회원님을 위한 추천</div>
            <a href="#">모두보기</a>
          </div>
          <div className="others">
            <li>
              <img
                className="others_img"
                src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="Italiano"
              />
              <a className="others_id_link" href="#">
                wooyoung
              </a>
              <div className="others_name">김우영</div>
            </li>
            <li>
              <button>게시</button>
            </li>
          </div>
          <div className="others">
            <li>
              <img
                className="others_img"
                src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="Italiano"
              />
              <a className="others_id_link" href="#">
                wooyoung
              </a>
              <div className="others_name">김우영</div>
            </li>
            <li>
              <button>게시</button>
            </li>
          </div>
          <div className="others">
            <li>
              <img
                className="others_img"
                src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="Italiano"
              />
              <a className="others_id_link" href="#">
                wooyoung
              </a>
              <div className="others_name">김우영</div>
            </li>
            <li>
              <button>게시</button>
            </li>
          </div>
          <div className="others">
            <li>
              <img
                className="others_img"
                src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="Italiano"
              />
              <a className="others_id_link" href="#">
                wooyoung
              </a>
              <div className="others_name">김우영</div>
            </li>
            <li>
              <button>게시</button>
            </li>
          </div>
          <div className="others">
            <li>
              <img
                className="others_img"
                src="https://images.unsplash.com/photo-1614710937240-94e98c728347?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="Italiano"
              />
              <a className="others_id_link" href="#">
                wooyoung
              </a>
              <div className="others_name">김우영</div>
            </li>
            <li>
              <button>게시</button>
            </li>
          </div>
        </aside>
      </sidebar>
    );
  }
}

export default Sidebar;
