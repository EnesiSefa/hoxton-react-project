import { useEffect, useState } from "react";
import "./ProfilePage.css";
import { Post, Story, User } from "../types/type";
import { Link } from "react-router-dom";
import Header from "../components/Header";
export default function ProfilePage({ user, logout, setUser }: any) {
  const [posts, setPosts] = useState<Post[]>([]);

  const [stories, setStories] = useState<Story[]>([]);
  const [comments, setComments] = useState<Story[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/stories")
      .then((resp) => resp.json())
      .then((storiesFromServer) => setStories(storiesFromServer));
  }, []);

  function addPost(e: any) {
    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: e.target.content.value,
        description: e.target.description.value,
        likes: 0,
        userId: user.id,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => setComments(data));

    let newPosts: Post[] = structuredClone(posts);
    newPosts.push({
      image: e.target.content.value,
      description: e.target.description.value,
      likes: 0,
      userId: user.id,
    });
    let newUser = structuredClone(user);
    newUser.posts?.push({
      image: e.target.content.value,
      description: e.target.description.value,
      likes: 0,
      userId: user.id,
    });
    setPosts(newPosts);
    setUser(newUser);
  }

  function deletingPost(post: Post) {
    fetch(`http://localhost:4000/posts/${post.id}`, {
      method: "DELETE",
    }).then((resp) => {
      resp.json();
    });

    let newPosts: Post[] = structuredClone(posts);

    for (let i = 0; i < newPosts.length; i++) {
      if (newPosts[i].id === post.id) {
        newPosts.splice(i, 1);
      }
    }
    let newUser = structuredClone(user);
    for (let i = 0; i < newUser.posts.length; i++) {
      if (newUser.posts[i].id === post.id) {
        newUser.posts[i].splice(i, 1);
      }
    }

    setPosts(newPosts);
    setUser(newUser);
  }

  return (
    <div className="profilepage">
      <Header user={user} logout={logout} />
      <main className="main">
        <div className="profile">
          <div className="upper-profile">
            <div className="profile-icon">
              <img className="profile-pic" src={user?.profilePic} alt="" />
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
            {stories.map((story) => (
              <div className="stories">
                <>
                  <img
                    className="story-pic"
                    src={story.storyPic}
                    alt={story.storyTitle}
                  />
                  <p>{story.storyTitle}</p>
                </>
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
              {user?.posts?.map((post: any) => (
                <img className="feed-post-pic" src={post?.image} alt="" />
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <form action="">
          <label htmlFor="">
            <input type="text" placeholder="paste the link " />
          </label>
          <label htmlFor="">
            <input type="text" placeholder="write a description" />
          </label>
        </form>
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
