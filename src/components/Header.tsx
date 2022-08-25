import { Link } from "react-router-dom";

export default function Header({ logout, user }: any) {
  return (
    <header className="header">
      <div className="instagram-logo">
        <Link to={"/HomePage"}>
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
          <a href="/inbox-page/inbox.html">
            <img className="panel-icon" src="/images/inbox.svg" alt="" />
          </a>
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
          <Link to={"/ProfilePage"}>
            <img className="panel-icon" src="/images/profile-pic.webp" alt="" />
          </Link>
          <div>
            {user !== null && user !== undefined ? (
              <button onClick={logout}>log out</button>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
