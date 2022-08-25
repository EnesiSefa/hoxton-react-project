import { useEffect, useState } from "react";
import "./ProfilePage.css";
import { Post, Story, User } from "../types/type";
import { Link } from "react-router-dom";
export default function ProfilePage({ user }: any) {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);
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

    setPosts(newPosts);
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

    setPosts(newPosts);
  }

  return (
    <div className="profilepage">
      <header className="header">
        <div className="instagram-logo">
          <Link to={"HomePage"}>
            <img
              className="instagram-logo-pic"
              src="/images/Instagram_logo.svg.png"
              alt=""
            />
          </Link>
        </div>
        <div className="searchbar">
          <span className="material-symbols-outlined"> search </span>
          <input
            className="searchbar-inside"
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="navigation-panel">
          <div className="home">
            <img className="panel-icon" src="/images/home.svg" alt="" />
          </div>
          <div className="inbox">
            <img className="panel-icon" src="/images/inbox.svg" alt="" />
          </div>
          <div className="new-post">
            <img className="panel-icon" src="/images/new post.svg" alt="" />
          </div>
          <div className="explore">
            <img className="panel-icon" src="/images/explore.svg" alt="" />
          </div>
          <div className="activity">
            <img className="panel-icon" src="/images/big like.svg" alt="" />
          </div>
          <div className="nav-profile-icon">
            <a href="#">
              <img
                className="nav-profile-pic"
                src="/images/profile-pic.webp"
                alt=""
              />
            </a>
          </div>
        </div>
      </header>
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
        <form action="">
          <label htmlFor="">
            <input type="text" placeholder="paste the link " />
          </label>
          <label htmlFor="">
            <input type="text" placeholder="write a description" />
          </label>
        </form>
        {/* <ul className="nav-list">
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
        </ul> */}
      </footer>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import "./ProfilePage.css";
// import { Post, Story, User } from "../types/type";
// export default function ProfilePage() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [posts,setPosts]= useState<Post[]>([])
//   useEffect(() => {
//     fetch("http://localhost:4000/users")
//       .then((resp) => resp.json())
//       .then((usersFromServer) => setUsers(usersFromServer));
//   }, []);
//   const [stories, setStories] = useState<Story[]>([]);
//   useEffect(() => {
//     fetch("http://localhost:4000/stories")
//       .then((resp) => resp.json())
//       .then((storiesFromServer) => setStories(storiesFromServer));
//   }, []);

//   function addPost(e:any){
//     fetch("http://localhost:4000/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//           image: e.target.content.value,
//           description: e.target.description.value,
//         likes: 0,
//         userId: users.id,

//       }),
//     })
//       .then((resp) => resp.json())
//       .then((data) => setComments(data));

//     let newPosts: Post[] = structuredClone(posts);
//    newPosts.push({
//     image: e.target.content.value,
//     description: e.target.description.value,
//    likes: 0,
//      userId: users.id,})

//     setPosts(newPosts);
//   }

//   function deletingPosts(post: Post) {
//     fetch(`http://localhost:4000/Posts/${post.id}`, {
//       method: "DELETE",
//     }).then((resp) => {
//       resp.json();
//     });

//     let newPosts: Post[] = structuredClone(posts);

//     for (let i = 0; i < newPosts.length; i++) {
//       if (newPosts[i].id === post.id) {
//         newPosts.splice(i, 1);
//       }
//     }

//     setPosts(newPosts);
//   }

//   return (
//     <div className="profilepage">
//       <header className="header">
//         <div className="instagram-logo">
//           <a href="/index.html"
//             ><img
//               className="instagram-logo-pic"
//               src="/images/Instagram_logo.svg.png"
//               alt=""
//           /></a>
//         </div>
//         <div className="searchbar">
//           <span className="material-symbols-outlined"> search </span>
//           <input className="searchbar-inside" type="search" placeholder="Search" />
//         </div>
//         <div className="navigation-panel">
//           <div className="home">
//             <img className="panel-icon" src="/images/home.svg" alt="" />
//           </div>
//           <div className="inbox">
//             <img className="panel-icon" src="/images/inbox.svg" alt="" />
//           </div>
//           <div className="new-post">
//             <img className="panel-icon" src="/images/new post.svg" alt="" />
//           </div>
//           <div className="explore">
//             <img className="panel-icon" src="/images/explore.svg" alt="" />
//           </div>
//           <div className="activity">
//             <img className="panel-icon" src="/images/big like.svg" alt="" />
//           </div>
//           <div className="nav-profile-icon">
//             <a href="/sign-up-page/sign-up.html"
//               ><img
//                 className="nav-profile-pic"
//                 src="/images/profile-pic.webp"
//                 alt=""
//             /></a>
//           </div>
//         </div>
//       </header>
//       <main className="main">
//         <div className="profile">
//           <div className="upper-profile">
//             <div className="profile-icon">
//               <img
//                 className="profile-pic"
//                 src="/feed-images/feed-profile-pic.jpg"
//                 alt=""
//               />
//             </div>
//             <div className="profile-info">
//               <div className="profile-username-settings">
//                 <div className="username">
//                   <h3>Landscape</h3>
//                 </div>
//                 <div className="edit">
//                   <button className="edit-button">Edit profile</button>
//                 </div>
//                 <div className="settings">
//                   <img src="/feed-images/settings.svg" alt="" />
//                 </div>
//               </div>
//               <div className="profile-follower-stat">
//                 <div className="nr-posts">
//                   <b>2</b> posts
//                 </div>
//                 <div className="followers">
//                   <b>100</b> followers
//                 </div>
//                 <div className="following">
//                   <b>100</b> following
//                 </div>
//               </div>
//               <div className="profile-name-bio">
//                 <b>nature</b>
//                 <p>beautiful</p>
//               </div>
//             </div>
//           </div>

//           <div className="story-highlights">
//             {stories.map((story) => (
//               <div className="stories">
//                 <>
//                   <img
//                     className="story-pic"
//                     src={story.storyPic}
//                     alt={story.storyTitle}
//                   />
//                   <p>{story.storyTitle}</p>
//                 </>
//               </div>
//             ))}
//           </div>

//           <div className="feed-navigation">
//             <a className="feed-links" href="#">
//               <img
//                 className="feed-navigation-icons"
//                 src="/feed-images/grid.svg"
//                 alt=""
//               />
//               posts
//             </a>
//             <a className="feed-links" href="#">
//               <img
//                 className="feed-navigation-icons"
//                 src="/feed-images/videos.svg"
//                 alt=""
//               />
//               videos
//             </a>
//             <a className="feed-links" href="#">
//               <img
//                 className="feed-navigation-icons"
//                 src="/feed-images/saved.svg"
//                 alt=""
//               />
//               saved
//             </a>
//             <a className="feed-links" href="#">
//               <img
//                 className="feed-navigation-icons"
//                 src="/feed-images/tagged.svg"
//                 alt=""
//               />
//               tagged
//             </a>
//           </div>

//           <div className="feed-post">
//             <div className="feed-content">
//               <img
//                 className="feed-post-pic"
//                 src="/feed-images/pic3.jpg"
//                 alt=""
//               />
//               <img
//                 className="feed-post-pic"
//                 src="/feed-images/pic2.jpg"
//                 alt=""
//               />
//               <img
//                 className="feed-post-pic"
//                 src="/feed-images/pic4.jpg"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </main>
//       <footer className="footer">
//         <form action="">
//           <label htmlFor="">
//             <input type="text" placeholder="paste the link "/>
//           </label>
//           <label htmlFor="">
//             <input type="text" placeholder="write a description"/>
//           </label>
//         </form>
//         {/* <ul className="nav-list">
//           <label htmlFor="">
//             English
//             <select name="" id="">
//               <option value="">English</option>
//               <option value="">German</option>
//               <option value="">Italian</option>
//               <option value="">Polish</option>
//               <option value="">French</option>
//             </select>
//           </label>

//           <li>© 2022 Instagram from Meta</li>
//         </ul> */}
//       </footer>
//     </div>
//   );
// }
