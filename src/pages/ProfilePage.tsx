import { useEffect, useState } from "react";
import "./ProfilePage.css";
import { User } from "../types/type";
export default function ProfilePage() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);
  return (
    <div className="profilepage">
      <main className="main">
        <div className="profile">
          <div className="upper-profile">
            <div className="profile-icon">
              <img
                className="profile-pic"
                src="/feed-images/feed-profile-pic.jpg"
                alt=""
              />
            </div>
            <div className="profile-info">
              <div className="profile-username-settings">
                <div className="username">
                  <h3>Landscape</h3>
                </div>
                <div className="edit">
                  <button className="edit-button">Edit profile</button>
                </div>
                <div className="settings">
                  <img src="/feed-images/settings.svg" alt="" />
                </div>
              </div>
              <div className="profile-follower-stat">
                <div className="nr-posts">
                  <b>2</b> posts
                </div>
                <div className="followers">
                  <b>100</b> followers
                </div>
                <div className="following">
                  <b>100</b> following
                </div>
              </div>
              <div className="profile-name-bio">
                <b>nature</b>
                <p>beautiful</p>
              </div>
            </div>
          </div>

          <div className="story-highlights">
            {users.map((user) => (
              <div className="stories">
                {user.storyHighlights.map((photo) => (
                  <>
                    <img
                      className="story-pic"
                      src={photo.storyPic}
                      alt={photo.storyTitle}
                    />
                    <p>{photo.storyTitle}</p>
                  </>
                ))}
              </div>
            ))}
          </div>

          <div className="feed-navigation">
            <a className="feed-links" href="#">
              <img
                className="feed-navigation-icons"
                src="/feed-images/grid.svg"
                alt=""
              />
              posts
            </a>
            <a className="feed-links" href="#">
              <img
                className="feed-navigation-icons"
                src="/feed-images/videos.svg"
                alt=""
              />
              videos
            </a>
            <a className="feed-links" href="#">
              <img
                className="feed-navigation-icons"
                src="/feed-images/saved.svg"
                alt=""
              />
              saved
            </a>
            <a className="feed-links" href="#">
              <img
                className="feed-navigation-icons"
                src="/feed-images/tagged.svg"
                alt=""
              />
              tagged
            </a>
          </div>

          <div className="feed-post">
            <div className="feed-content">
              <img
                className="feed-post-pic"
                src="/feed-images/pic3.jpg"
                alt=""
              />
              <img
                className="feed-post-pic"
                src="/feed-images/pic2.jpg"
                alt=""
              />
              <img
                className="feed-post-pic"
                src="/feed-images/pic4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <ul className="nav-list">
          <label htmlFor="">
            English
            <select name="" id="">
              <option value="">English</option>
              <option value="">German</option>
              <option value="">Italian</option>
              <option value="">Polish</option>
              <option value="">French</option>
            </select>
          </label>

          <li>© 2022 Instagram from Meta</li>
        </ul>
      </footer>
    </div>
  );
}
