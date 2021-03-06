import React from 'react';
import './Main.scss';

class Mainlee extends React.Component {
    render() {
        return (
            <div className="Main">
                <div className="navOutline">
                    <nav className="navCemantic">
                        <section className="navBox">
                            <div className="navLogo">
                                <i className="fab fa-instagram"></i>
                                <span>Westagram</span>
                            </div>
                            <div className="searchBox">
                                <input className="searchBox" placeholder="검색" />
                                <img className="searchIcon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" alt="search icon" />
                            </div>
                            <div className="navIcons">
                                <img className="icons" src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/re-pict-house-base.png" alt="home"/>
                                <img className ="icons" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore" />
                                <img className ="icons" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
                                <img className ="icons" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile" />
                            </div>
                        </section>
                    </nav>
                </div>
                <div className="bodyContent">
                    <div className="article">
                        <div className="story">
                            <img className='storyImage' src='https://pbs.twimg.com/media/Df9x7NAVQAEEAfZ?format=jpg&name=large' alt="story" />
                            <img className='storyImage' src='https://pbs.twimg.com/media/DfLCQilUcAA7wjY?format=jpg&name=large' alt="story" />
                            <img className='storyImage' src='https://pbs.twimg.com/media/Dh9qA8aVAAAEtTK?format=jpg&name=large' alt="story" />
                            <img className='storyImage' src='https://pbs.twimg.com/media/Df9x7NAVQAEEAfZ?format=jpg&name=large' alt="story" />
                            <img className='storyImage' src='https://pbs.twimg.com/media/DfLCQilUcAA7wjY?format=jpg&name=large' alt="story" />
                            <img className='storyImage' src='https://pbs.twimg.com/media/Dh9qA8aVAAAEtTK?format=jpg&name=large' alt="story" />
                        </div>
                        <div className="post">
                            <div className="postAccount">
                                <div className="postAccountInfo">
                                    <img className="postAccountPicture" alt="profile" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/43820559_293430734623864_6684762093918355456_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=n61ZtqsRTHAAX8UTGiA&oh=7f362cf871a203ae7ed98fcf5a27ae15&oe=606182D3" />
                                    <span className="postAccountName">mavieestbellee</span>
                                </div>
                            </div>
                            <div className="postImageBox">
                                <img src="https://pbs.twimg.com/media/ETdjctnWAAM5c45?format=jpg&name=large" alt="tweet" className="postImage"/>
                            </div>
                            <div class="likeSaveIcons">
                                <div class="likeSaveIconsLeft">
                                    <img src="https://static.thenounproject.com/png/28217-200.png" alt="heart" class="postIcons" />
                                    <img src="https://static.thenounproject.com/png/638755-200.png" alt="comment" class="postIcons" />
                                    <img src="https://static.thenounproject.com/png/2796195-200.png" alt="" class="postIcons" />
                                </div>
                                <div class="likeSaveIconsRight">
                                    <img src="https://i.pinimg.com/originals/b7/ab/c2/b7abc255056b1bcf3cb506c44ada29c7.png" alt="save" class="postIcons" />
                                </div>
                            </div>
                            <div className="commentBox">
                                <div className="displayComment">
                                        <p className="likeCount">35 likes</p>
                                        <ul id="postedComments">
                                            <li className="comments">what a scene!</li>
                                        </ul>
                                </div>
                                <div className="writeComment">
                                    <input type="text" id="commentInput" />
                                    <button id="commentBtn">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainRight">
                        <img src='blob:https://mail.google.com/b93dc97d-5209-4726-b958-e261222e83e4' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Mainlee;