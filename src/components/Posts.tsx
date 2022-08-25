import { useEffect, useState } from "react";
import { Post, User } from "../types/type";
import { Comment } from "../types/type";

export default function Posts() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [userFromComments, setUserfromComments] = useState(null);
  const [postingComments, setPostingComments] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/users?_embed=posts&_embed=comments")
      .then((resp) => resp.json())
      .then((usersFromServer) => {
        setUsers(usersFromServer);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/posts?_expand=user&_embed=comments")
      .then((resp) => resp.json())
      .then((postsFromServer) => setPosts(postsFromServer));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/comments?_expand=user&_expand=post")
      .then((resp) => resp.json())
      .then((commentsFromServer) => setComments(commentsFromServer));
  }, []);
  function getUserFromCommentId(userId: any) {
    setUserfromComments(userId);
    const finalUser = users.find((user) => user.id === userFromComments);
    return finalUser;
  }
  
  function postComments(e: any, post: Post) {
    fetch("http://localhost:4000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: e.target.content.value,
        likes: post.likes,
        userId: post.userId,
        postId: post.id,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => setComments(data));

    let newPosts: Post[] = structuredClone(posts);
    //newPosts.push(post)
    //setPosts(newPosts)
    for (const element of newPosts) {
      if (element.id === post.id) {
        element.comments?.push({
          content: e.target.content.value,
          likes: post.likes,
          userId: post.userId,
          postId: post?.id!,
        });
      }
    }
    setPosts(newPosts);
  }


  function deletingComments(comment: Comment, post: Post) {
    console.log(comment);

    fetch(`http://localhost:4000/comments/${comment.id}`, {
      method: "DELETE",
    }).then((resp) => {
      resp.json();
    });

    let newPosts: Post[] = structuredClone(posts);

    for (let i = 0; i < newPosts.length; i++) {
      if (newPosts[i].id === post.id) {
        for (let j = 0; j < newPosts[i].comments?.length!; j++) {
          // @ts-ignore
          if (newPosts[i]?.comments[j]?.id! === comment.id) {
            newPosts[i].comments?.splice(j, 1);
          }
        }
      }
    }
    setPosts(newPosts);
  }
  return (
    <main className="main-posts">
      {posts.map((post) => (
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
                <h4>{post.user?.name}</h4>
                <p>{post.user?.username}</p>
              </div>
            </div>
            <div className="three-dots">
              <span className="material-symbols-outlined"> more_horiz </span>
            </div>
          </header>
          <main className="thumbnail">
            <img className="in-thumbnail" src={post.image} />
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
              <h5>{post.likes} likes</h5>
            </span>
            <div className="profile-username-cap">
              <h4>{post.user?.username}</h4>
              <p className="caption">{post.description}</p>
            </div>
          </div>
          {post.comments?.map((comment) => (
            <>
              <div className="comments">
                {/* <img src="./images/smiley-face.svg" alt="" /> */}

                <ul>
                  <li>
                    <img src="" alt="" />
                    <h4>{comment.user?.name}</h4>
                    <p>{comment.content}</p>
                    
                    <button >♡</button>
                    <span>{comment.likes}</span>
                    <button
                      className="delete-button"
                      onClick={() => {
                        deletingComments(comment, post);
                      }}
                    >
                      X
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ))}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              postComments(e, post);
            }}
            action=""
          >
            <input
              type="text"
              className="comment-box"
              placeholder="Add a comment"
              name="content"
            />
          </form>
        </div>
      ))}
    </main>
  );
}
