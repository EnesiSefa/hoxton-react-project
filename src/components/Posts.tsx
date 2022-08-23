import { useEffect, useState } from "react";
import { User } from "../types/type";

export default function Posts() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);

  return (
    <main className="main-posts">
      {users.map((user) => (
        <div className="post">
          <header className="post-header">
            <div className="icon-username">
              <div className="post-icon">
                <img
                  className="post-icon-pic"
                  src="/images/story2.jpg"
                  alt=""
                />
              </div>
              <div className="profile-username">
                <h4>{user.name}</h4>
                <p>{user.username}</p>
              </div>
            </div>
            <div className="three-dots">
              <span className="material-symbols-outlined"> more_horiz </span>
            </div>
          </header>
          <main className="thumbnail">
            <img className="in-thumbnail" src="./videos/video-eggs.mp4" />
          </main>
          <nav className="interaction">
            <div className="like-com-share">
              <span className="like">
                <img src="/images/big like.svg" alt="" />
              </span>
              <span className="comment">
                <img src="/images/comment.svg" alt="" />
              </span>
              <span className="share">
                <img src="/images/share.svg" alt="" />
              </span>
            </div>
            <div className="save-button">
              <span className="save">
                <img src="/images/save.svg" alt="" />
              </span>
            </div>
          </nav>
          <div className="post-info">
            <span className="likes">
              <h5>101 likes</h5>
            </span>
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
            <form action="">
              <input
                type="text"
                className="comment-box"
                placeholder="Add a comment"
              />
            </form>
          </div>
        </div>
      ))}
    </main>
  );
}
