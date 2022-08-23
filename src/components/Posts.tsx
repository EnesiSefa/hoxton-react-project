import { useState } from "react"

import "../App.css"; 

export default function Posts(){
    const [users, setUsers] = useState()
    return(
        <main className="main-posts">
        <div className="post">
          <header className="post-header">
            <div className="icon-username">
              <div className="post-icon">
                <img className="post-icon-pic" src="/images/story2.jpg" alt="" />
              </div>
              <div className="profile-username">
                <h4>landscape</h4>
                <p>somewhere</p>
              </div>
            </div>
            <div className="three-dots">
              <span className="material-symbols-outlined"> more_horiz </span>
            </div>
          </header>
          <main className="thumbnail">
            <video className="in-thumbnail" src="./videos/video-eggs.mp4" autoPlay></video>
          </main>
          <nav className="interaction">
            <div className="like-com-share">
              <span className="like"
                ><img src="/images/big like.svg" alt=""
              /></span>
              <span className="comment"
                ><img src="/images/comment.svg" alt=""
              /></span>
              <span className="share"><img src="/images/share.svg" alt="" /></span>
            </div>
            <div className="save-button">
              <span className="save"><img src="/images/save.svg" alt="" /></span>
            </div>
          </nav>
          <div className="post-info">
            <span className="likes"><h5>101 likes</h5></span>
            <div className="profile-username-cap">
              <h4>landscape</h4>
              <p className="caption">
                "delicous omelette" Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Quas perferendis fuga voluptate eum obcaecati
                consequuntur sit alias unde ullam neque.
              </p>
            </div>
          </div>
          <div className="comments">
            <img src="./images/smiley-face.svg" alt="" />
            <input
              type="text"
              className="comment-box"
              placeholder="Add a comment"
            />
          </div>
        </div>
        <div className="post">
          <header className="post-header">
            <div className="icon-username">
              <div className="post-icon">
                <img className="post-icon-pic" src="/images/story2.jpg" alt="" />
              </div>
              <div className="profile-username">
                <h4>landscape</h4>
                <p>somewhere</p>
              </div>
            </div>
            <div className="three-dots">
              <span className="material-symbols-outlined"> more_horiz </span>
            </div>
          </header>
          <main className="thumbnail">
            <video className="in-thumbnail" src="./videos/video-eggs.mp4" autoPlay></video>
          </main>
          <nav className="interaction">
            <div className="like-com-share">
              <span className="like"
                ><img src="/images/big like.svg" alt=""
              /></span>
              <span className="comment"
                ><img src="/images/comment.svg" alt=""
              /></span>
              <span className="share"><img src="/images/share.svg" alt="" /></span>
            </div>
            <div className="save-button">
              <span className="save"><img src="/images/save.svg" alt="" /></span>
            </div>
          </nav>
          <div className="post-info">
            <span className="likes"><h5>101 likes</h5></span>
            <div className="profile-username-cap">
              <h4>landscape</h4>
              <p className="caption">
                "delicous omelette" Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Quas perferendis fuga voluptate eum obcaecati
                consequuntur sit alias unde ullam neque.
              </p>
            </div>
          </div>
          <div className="comments">
            <img src="./images/smiley-face.svg" alt="" />
            <input
              type="text"
              className="comment-box"
              placeholder="Add a comment"
            />
          </div>
        </div>
      </main>
    )
}